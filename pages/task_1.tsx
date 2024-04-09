import { Formik, Form, Field, useFormikContext, ErrorMessage } from 'formik';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from "react";

interface Category {
    id: number;
    name: string;
    description: string | null;
    image: string;
    slug: string;
    children: Category[] | null;
    circle_icon: string;
    disable_shipping: number;
}


interface Property {
    id: number;
    name: string;
    description: string | null;
    slug: string;
    parent: Category | null;
    list: boolean;
    type: string | null;
    value: string;
    other_value: string | null;
    options: { id: number; name: string }[];
}

const fetchData = async (url: string, secretKey: string) => {
    const response = await axios.get(url, {
        headers: {
            'private-key': secretKey
        }
    });
    return response.data?.data;
};

export default function Task_1() {
    const [selectedCategory, setSelectedCategory] = useState<number | undefined>(undefined);
    const [selectedSubCategory, setSelectedSubCategory] = useState<number | undefined>(undefined);
    const [subCategoryData, setSubCategoryData] = useState<Category[] | null>(null);
    const [formValues, setFormValues] = useState<any>([]);
    const { data: categoriesData } = useQuery({ queryKey: ['categoriesData'], queryFn: () => fetchData("https://staging.mazaady.com/api/v1/get_all_cats", "3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16") });
    const { data: subCategoryOptionsData, isLoading: subCategoryOptionsDataLoading, isError: subCategoryOptionsDataError } = useQuery<Property[]>({queryKey: ['subCategoryOptions', selectedSubCategory], queryFn: () =>
        fetchData(`https://staging.mazaady.com/api/v1/properties?cat=${selectedSubCategory}`, "3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16") 
    });

    useEffect(() => {
        if (selectedCategory) setSubCategoryData(categories?.[selectedCategory-1]?.children)
    }, [selectedCategory, categoriesData])
    
    const { categories } = categoriesData || {};
    const initialFormValues: Record<string, string> = {};
    if (subCategoryOptionsData && subCategoryOptionsData.length > 0) {
        subCategoryOptionsData.forEach((property, i) => {
            initialFormValues[property.name] = '';
        });
    }
    const [otherInputs, setOtherInputs] = useState<{ [key: string]: boolean }>({});
    return (
        <div className="h-[100vh] relative flex flex-col items-start p-10 gap-5 text-black">
            <Formik
                initialValues={{
                    selectedCategory: undefined,
                    selectedSubCategory: undefined,
                    ...initialFormValues
                }}
                validate={(values) => {
                    const errors: Record<string, string> = {};
                    if (!values.selectedCategory) {
                        errors.selectedCategory = 'Main Category is required';
                    }
                    if (!values.selectedSubCategory) {
                        errors.selectedSubCategory = 'Sub Category is required';
                    }
                    return errors;
                }}
                onSubmit={(values) => {
                    setFormValues(Object.entries(values));
                }}
            >
                {({ isSubmitting, setFieldValue, values }) => (
                    <Form className='w-full flex flex-col gap-5 p-7'>
                        <div>
                            <label htmlFor="category">Main Category<span className='font-bold text-[red]'>*</span> </label>
                            <Field id="category" className="w-full text-[0.7em] h-[3em] rounded-md cursor-pointer my-1" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { 
                                const selectedIndex = e.target.selectedIndex;
                                const selectedOptionKey = e.target.options[selectedIndex].getAttribute('data-id');
                                setSelectedCategory(selectedOptionKey?parseInt(selectedOptionKey): undefined);
                                setSelectedSubCategory(undefined); 
                                setFieldValue('selectedCategory', e.target.value);
                            }} as="select" name="selectedCategory" label="Select Category" >
                                <option className='hidden' value="">Select category</option>
                                {categories?.map((category: Category) => (
                                    <option value={category.name} key={category.id} data-id={category.id}>{category.name}</option>
                                ))}
                            </Field>
                            <ErrorMessage name="selectedCategory" component="div" className="text-red-500 text-[0.5em] px-1" />
                        </div>
                        <div>
                            <label htmlFor="category">Sub Category<span className='font-bold text-[red]'>*</span> </label>
                            <Field className="w-full text-[0.7em] h-[3em] rounded-md cursor-pointer my-1" id="subCategory" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                const selectedIndex = e.target.selectedIndex;
                                const selectedOptionKey = e.target.options[selectedIndex].getAttribute('data-id');
                                setSelectedSubCategory(selectedOptionKey?parseInt(selectedOptionKey): undefined);
                                setFieldValue('selectedSubCategory', e.target.value);
                            }} as="select" name="selectedSubCategory" label="Select SubCategory">
                                <option className='hidden' value="" >Select Sub Category</option>
                                {subCategoryData?.map((subCategory, i) => (
                                    <option value={subCategory.name} key={subCategory.id} data-id={subCategory.id}>{subCategory.name}</option>
                                ))}
                            </Field>
                            <ErrorMessage name="selectedSubCategory" component="div" className="text-red-500 text-[0.5em] px-1" />
                        </div>
                        <div className="w-full flex flex-col gap-5">
                            {
                            selectedCategory &&
                            selectedSubCategory &&
                            (subCategoryOptionsDataLoading ? (
                                <div>Loading options...</div>
                            ) : subCategoryOptionsDataError ? (
                                <div>Error fetching options</div>
                            ) : (
                            subCategoryOptionsData?.map((property, i) => (
                                <div key={property.id}>
                                    <label htmlFor={property.name}>{property.name} </label>
                                    <Field className="w-full text-[0.7em] h-[3em] rounded-md cursor-pointer my-1" id={property.id.toString()} as="select" name={property.name} label={`Select ${property.name}`}  
                                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                            const selectedValue = e.target.value;
                                            setOtherInputs(prevState => ({
                                                ...prevState,
                                                [property.name]: selectedValue === ""
                                            }));
                                            setFieldValue(property.name, selectedValue);
                                        }}>
                                        <option className='hidden' value="" >Select {property.name}</option>
                                        {property.options.map((option) => (
                                            <option value={option.name} key={option.id}>{option.name}</option>
                                        ))}
                                        <option value="">Other</option>
                                    </Field>
                                    {otherInputs[property.name] && (
                                        <input
                                            type="text"
                                            name={property.name}
                                            value={(values.hasOwnProperty(property.name) ? values[property.name as keyof typeof values] : '') || ''}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                                setFieldValue(property.name, "Other");
                                                setFieldValue(property.name, e.target.value);
                                            }}
                                            placeholder={`Enter other ${property.name}`}
                                            className="w-full text-[0.7em] px-1"
                                        />
                                    )}
                                </div>
                            ))))
                            }
                        </div>
                        {formValues.length > 0 && (
                            <div className="mt-5 ">
                                <table className="border-collapse w-full  border border-gray-400">
                                    <thead>
                                    <tr>
                                        <th className="border border-gray-400 px-4 py-2">Key</th>
                                        <th className="border border-gray-400 px-4 py-2">Value</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {formValues.map(([key, value]: [number, string]) => (
                                        <tr key={key}>
                                        <td className="border border-gray-400 px-4 py-2">{key}</td>
                                        <td className="border border-gray-400 px-4 py-2">{value}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                        <button className='w-full h-16 bg-black text-white rounded-xl' type="submit">
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
