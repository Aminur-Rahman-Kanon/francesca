import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';

const Guidelines = () => {
    return (
        <div className={styles.guidelines}>
            <div className={styles.hero}>
                <Image src={'/images/others/guidelines.jpg'} width={0} height={0} unoptimized quality={100} className={styles.heroImg} alt='francesca' />
            </div>

            <div className={styles.banner}>
                <h2 className={styles.headingLarge}>massage etiquette guidelines</h2>

                <p className={styles.textSmall}>
                    This guidance is evolved from my approach to sensual massage. If you follow it, then your session will be a pleasure. It you cannot stay within this guidance, I am not the massuese for you.
                </p>

                <p className={styles.textSmall}>
                    If you work with in this guidance you will have a splendid experience that you will want to repeat.
                </p>

                <p className={styles.textSmall}>
                    Be on time for your appointment. If early, rest up somewhere until the time. If you are going to be late, let me know by message as soon as possible. If you are too late I may have to cancel or shorten your appointment to avoid impacting other clients.
                </p>

                <p className={styles.textSmall}>
                    Please take my offer of a shower on arrival, and ensure you wash all your nooks and crannies. That way you can relax wherever my hands go. You may also shower at the end of your appointment. Showering time does not  shorten your appointment duration.
                </p>

                <h3 className={styles.headingMedium}>
                    I never do outcalls, whether to your home, office or hotel.
                </h3>

                <p className={styles.textSmall}>
                    I offer sensual massage to ADULTS  and nothing more. No matter how beautiful, endowed or rich you are. This is never negotiable. Ever.
                </p>

                <p className={styles.textSmall}>
                    With the exception of the Tantrika Erotika Experience please do not touch me. You are here to enjoy the sensations of my highly experienced hands.
                </p>

                <h3 className={styles.headingMedium}>Please be prepared to pay in GBP cash at the start of your appointment. I cannot accept cards, cheques, crypto, foreign currency or barter.</h3>

                <h4 className={styles.headingSmall}>
                    As I am only a sensual massage therapist I do not offer oral, reverse oral, sideways oral, vaginal sex, anal sex, nasal or any other form of sex you care to think of, strap on play, domination, watersports, foot worship, BDSM, fetis play or any other escort services. If that is what you want I am not who you are looking for, Please select this notice.
                </h4>

                <h4 className={styles.headingSmall}>This is not negotiable</h4>

                <p className={styles.textSmall}>
                    Please do not arrive under the influence of alcohol or drugs - you won't enjoy the experience of the massage. And please don't smoke before arrival. I'm extremely allergic to tobacco smoke and will sneeze throughout the session, or worse.
                </p>

                <div className={styles.videoContainer}>
                    <video itemType='video/mp4' className={styles.video} playsInline controls>
                        <source src='https://francesca.care/sneeze.mp4'></source>
                    </video>

                    <h4 className={styles.headingSmall}>Please don't smoke before you see me! This is a video showing how it makes sneeze or worse!</h4>
                </div>

                <p className={styles.textSmall}>
                    I take great care to ensure my service is confidential. I will not discuss any client with anyone else. In return, I expect you to uphold the confidentiality and not try/ask to record our session, openly or otherwise, including live streaming. The videos on this site can serve to remind you of our time together. You can always go to my AdmireMe.vip account see uncensored erotic massage videos* and much more!
                </p>

                <p className={styles.textSmall}>
                    On a less stern note, I promise I will do everything I can to make your appointment special. If you have particular music, lighting, or other environmental wishes, please let me know in advance.
                </p>
            </div>
        </div>
    )
}

export default Guidelines
