'use client';

import React, { useState } from 'react';
import styles from './bookingForm.module.css';

function BookingForm() {

    type FormData = {
        name: string,
        email: string,
        phone: string,
        contactType: string,
        query: string,
        message: string
    }

    const [form, setForm] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        contactType: '',
        query: '',
        message: ''
    })

    const handleChange = (
        e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setForm({...form, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    console.log(form)

    return (
        <div className={styles.bookingForm}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>YOUR NAME:
                        <input type='text'
                                name='name'
                                placeholder='YOUR NAME'
                                className={styles.input}
                                onChange={handleChange}
                                />
                    </label>
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>YOUR EMAIL:
                        <input type='text'
                                name='email'
                                placeholder='YOUR EMAIL'
                                className={styles.input}
                                onChange={handleChange}
                                />
                    </label>
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>YOUR PHONE NUMBER:
                        <input type='text'
                                name='phone'
                                placeholder='YOUR PHONE NUMBER'
                                className={styles.input}
                                onChange={handleChange}
                                />
                    </label>
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>HOW SHOULD I CONTACT YOU:
                        <select  name='contactType' defaultValue={'EITHER PHONE OR EMAIL'} className={styles.select} onChange={handleChange}>
                            <option disabled value='EITHER PHONE OR EMAIL' className={styles.option}>EITHER PHONE OR EMAIL</option>
                            <option value={'Email'} className={styles.option}>EMAIL</option>
                            <option value={'Phone'} className={styles.option}>PHONE</option>
                        </select>
                    </label>
                </div>
                <p className={styles.textSmall}>All my massages and treatments are done by appointment only at my studio near Gatwick, Surrey</p>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>YOUR INQUIRY IS ABOUT:
                        <select name='query' defaultValue="Choose One" className={styles.select} onChange={handleChange}>
                            <option disabled value='Choose One' className={styles.option}>CHOOSE ONE</option>
                            <option value={'An Appointment'} className={styles.option}>AN APPOINTMENT</option>
                            <option value={'A Question about my massages'} className={styles.option}>A QUESTION ABOUT MY MASSAGES</option>
                            <option value={'Link sharing'} className={styles.option}>LINK SHARING</option>
                            <option value={'About website'} className={styles.option}>ABOUT WEBSITE</option>
                        </select>
                    </label>
                </div>
                <div className={styles.inputContainer}>
                    <label className={styles.label}>
                        YOUR MESSAGE:
                        <textarea rows={7}
                                name='message'
                                placeholder='YOUR MESSAGE'
                                className={styles.textArea}
                                onChange={handleChange}/>
                    </label>
                </div>

                <button className={styles.btn}>SUBMIT</button>
            </form>
        </div>
    )
}

export default BookingForm
