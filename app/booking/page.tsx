import React, { useState } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import BookingForm from '@/components/bookingForm/bookingForm';

const Booking = () => {
    
    return (
        <div className={styles.booking}>
            <div className={styles.top}>
                <h2 className={styles.headingLarge}>Please fill in the contact form to book an appointment or any queries</h2>
            </div>

            <div className={styles.bottom}>
                <div className={styles.avatar}>
                    <Image src={'/images/others/f_3.jpg'} alt='francesca' width={0} height={0} unoptimized quality={100} className={styles.img} />
                </div>

                <div className={styles.formContainer}>

                    <BookingForm />
                </div>
            </div>
        </div>
    )
}

export default Booking;
