import Hero from "@/components/hero/hero"
import Treatments from "@/components/treatments/treatments"
import Offers from "@/components/offers/offers"
import SpecialTreatments from "@/components/special-treatments/special-treatments"
import Blog from "@/components/blog/blog"
import Massages from "@/components/massages/massages"
import BookAppointment from "@/components/bookAppointment/bookAppointment"
import Tantra from "@/components/tantra/tantra"
import Guidelines from "@/components/guidelines/guidelines"

export default function Home() {
  return (
    <main>
      <Hero />
      <Treatments />
      <BookAppointment />
      <Massages />
      <Tantra />
      <Guidelines />
      <Offers />
      <SpecialTreatments />
      <Blog />
    </main>
  )
}

