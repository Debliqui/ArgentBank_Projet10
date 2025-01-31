import Footer from "../../common/components/Footer"
import Header from "../../common/components/Header"
import Banner from "../../common/components/Banner"
import "./index.scss"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner>
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </Banner>
      </main>
      <Footer />
    </>
  )
}
