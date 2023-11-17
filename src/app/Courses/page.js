"use client"
import React, { useState } from 'react';
import './globals.css';

export default function Courses() {
    const [title, setTitle] = useState("");
    const [level, setLevel] = useState("");
    const [desc, setDesc] = useState("");
    const [img, setImg] = useState("");
    const [mainCourse, setMainCourse] = useState([]);

    const addProduct = async (productData) => {
        try {
            const response = await fetch('/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(productData),
            });

            if (response.ok) {
                console.log('Product added successfully');
            } else {
                console.error('Error adding product');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        // Create product data object
        const productData = {
            title,
            level,
            desc,
            img,
        };

        // Call the addProduct function to make the API request
        await addProduct(productData);

        // Update the local state with the new product
        setMainCourse([...mainCourse, productData]);

        // Reset form fields
        setTitle("");
        setLevel("");
        setDesc("");
        setImg("");
    };

    const deleteHandler = (i) => {
        let copyCourse = [...mainCourse];
        copyCourse.splice(i, 1);
        setMainCourse(copyCourse);
    };

    let renderCourse = <div className='no-render'><h2>No Course Available</h2></div>;

    if (mainCourse.length > 0) {
        renderCourse = mainCourse.map((t, i) => {
            return (
                <div className='course-list' key={i}>
                    <li className='li-li-c'>
                        <h5>{t.title}</h5>
                        <h6>{t.level}</h6>
                        <h6>{t.desc}</h6>
                        <button onClick={() => deleteHandler(i)} className=''>Delete</button>
                        <img src={t.img} alt={`Course ${i}`} />
                        <br />
                    </li>
                </div>
            );
        });
    }

    return (
        <>
            <section className='center-data'>
                <div>
                    <ul>{renderCourse}</ul>
                </div>
            </section>
            <section className='right-form'>
                <form onSubmit={submitHandler}>
                    <input
                        type='text'
                        placeholder='Enter Course Name'
                        className=''
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        type='text'
                        placeholder='Enter Course Level'
                        className=''
                        value={level}
                        onChange={(e) => setLevel(e.target.value)}
                    />
                    <input
                        type='text'
                        placeholder='Enter Course Description'
                        className=''
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                    <input
                        type='file'
                        placeholder='Image'
                        className=''
                        value={img}
                        onChange={(e) => setImg(e.target.value)}
                    />
                    <button className=''>Add Course</button>
                </form>
            </section>
            <hr />
        </>
    );
}
