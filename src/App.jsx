import { Hero, PopularProducts, SuperQuality, Services, SpecialOffer, CustomerReviews, Subscribe, Footer} from './sections/index';
import { Navbar } from './components/index'
const App = () => {
  return(
    <main className="relative">
      <Navbar />
        
        <Hero />
        
      <PopularProducts />
      <SuperQuality />
      <Services />
      <SpecialOffer />
      <CustomerReviews />
      <Subscribe />
      <Footer />
    </main>
  )
}

export default App;