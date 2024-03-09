import data from '../data/data';

function pricing () {
    const pricingData = data();

    return (
      <>
    <section className="py-20 dark:bg-gray-800 dark:text-gray-100">
          <div className="container px-4 mx-auto">
            <div className="max-w-2xl mx-auto mb-16 text-center">
              <span className="font-bold tracki uppercase dark:text-violet-400">Pricing</span>
              <h2 className="text-4xl font-bold lg:text-5xl">Choose your best plan</h2>
            </div>
            <div className="flex flex-wrap items-stretch -mx-4">
              {pricingData.map((plan, index) => (
                <div key={index} className="flex w-full relative mb-32 transition-transform transform hover:scale-105 sm:px-4 sm:w-1/2 md:w-1/2 lg:w-1/4 lg:mb-0 mb-4">
                     {plan.popular && (
                     <button type="button" 
                     style={{
                       background: 'linear-gradient(to right, #803989, #dd3d88)',
                       color: 'white',
                     }}
                     className="absolute focus:border-none focus:outline-none left-0 right-0 w-24 mx-auto top-[-1em] rounded-full font-semibold  py-1 border-0 text-center dark:bg-violet-400 dark:text-gray-900 transition duration-300 ease-in-out hover:bg-blue-500">{plan.popularButtonLabel}</button>
                    )}
                  <div className="flex flex-grow flex-col shadow-2xl p-6 space-y-6 rounded shadow sm:p-8 dark:bg-gray-900">

                    <div className="space-y-2">
                      <h4 className="text-2xl mb-5 mt-3 font-bold text-plan-color font-bold">{plan.title}</h4>
                      <div class="text-5xl text-gray-900 font-bold tracking-tight text-left">
                        <span class="inline-block align-top pt-2 text-lg text-price-color font-bold">$</span>
                        <span className="text-4xl font-bold ml-2 text-price-color sm:text-4xl md:text-4xl lg:text-6xl">{plan.cost}</span>
                        <span class="inline-block align-bottom pt-2 text-lg ml-3 text-price-color text-sm">/ {plan.monthly}</span>
                    </div>
                    </div>
                    <ul className="flex-1 pb-3.5 mb-6 dark:text-gray-400">
                        {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex text-sm text-feature mb-2 space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-400">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                            </svg>
                            <span>{feature}</span>
                            </li>
                        ))}
                        </ul>
                    <button type="button" 
                    style={{
                      background: 'linear-gradient(to right, #803989, #dd3d88)',
                      color: 'white',
                    }}
                    className="inline-block rounded-full absolute left-0 right-0 w-40 bottom-[-1em] mx-auto px-5 py-3 font-semibold tracki border-0 text-center dark:bg-violet-400 dark:text-gray-900 transition duration-300 ease-in-out hover:bg-blue-500 focus:border-none focus:outline-none">{plan.buttonLabel}</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    )
}

export default pricing;