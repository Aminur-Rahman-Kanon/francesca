import Header from "@/components/header/header"
import Hero from "@/components/hero/hero"
import Treatments from "@/components/treatments/treatments"
import Offers from "@/components/offers/offers"
import SpecialTreatments from "@/components/special-treatments/special-treatments"
import Blog from "@/components/blog/blog"
import Footer from "@/components/footer/footer"
import Massages from "@/components/massages/massages"
import BookAppointment from "@/components/bookAppointment/bookAppointment"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Treatments />
      <BookAppointment />
      <Massages />
      <Offers />
      <SpecialTreatments />
      <Blog />
      <Footer />
    </main>
  )
}

