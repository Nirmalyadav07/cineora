import React from 'react'

function SignupPage() {
  return (
    <div className='min-h-screen bg-[#111214] text-text-white'>

      <div className='mx-auto max-w-[1400px] px-6 py-5 lg:px-10'>
        <div className='flex items-center justify-between'>
          <img
            src="/cineora-logo-white.svg"
            alt="Cineora"
            className='h-10 w-auto'
          />

          <p className='text-18 text-text-lightgray'>
            Help
          </p>
        </div>

        
        <div className='mt-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16'>

          
          <div>
            <h1 className='text-28 font-semibold'>
              Cineora Signup
            </h1>

            <p className='mt-2 text-20 text-text-muted'>
              Join the Cineora community.
            </p>

            
            <div className='mt-6 flex min-h-[208px] items-center gap-8 rounded-2xl border border-[#51458c] bg-[#171719] p-7 shadow-[0_0_20px_rgba(103,80,255,0.12)]'>
              <div className='shrink-0 text-5xl'>
                🎟️
              </div>

              <div>
                <p className='text-18 font-semibold text-text-purple'>
                  CINEORA EXCLUSIVE
                </p>

                <h2 className='mt-2 text-24 font-semibold'>
                  Get 20% OFF on
                </h2>

                <h3 className='text-24'>
                  First Booking
                </h3>

                <p className='mt-2 text-16 leading-24 text-text-muted'>
                  Enjoy a special discount on your very first
                  movie ticket booking. New Users Only!
                </p>
              </div>
            </div>

        
            <div className='mt-6 flex min-h-[192px] items-center gap-8 rounded-2xl border border-border-slate bg-[#171719] p-7'>
              <div className='shrink-0 text-5xl'>
                💳
              </div>

              <div>
                <h2 className='text-24 font-semibold'>
                  FLAT CASHBACK
                </h2>

                <h3 className='text-24'>
                  on Bank Cards
                </h3>

                <p className='mt-2 text-16 leading-24 text-text-muted'>
                  Save extra on leading credit and debit cards
                  from major banks. (HDFC, ICICI, SBI)
                </p>
              </div>
            </div>

            
            <div className='mt-6 flex min-h-[192px] items-center gap-8 rounded-2xl border border-[#51458c] bg-[#171719] p-7 shadow-[0_0_20px_rgba(103,80,255,0.10)]'>
              <div className='shrink-0 text-5xl'>
                👑
              </div>

              <div>
                <p className='text-18 font-semibold text-text-purple'>
                  CINEORA CLUB REWARDS
                </p>

                <h2 className='mt-2 text-24 font-semibold'>
                  Rewards Await!
                </h2>

                <p className='mt-2 text-16 leading-24 text-text-muted'>
                  Earn points on every booking, exclusive
                  access, and early bird bookings.
                </p>
              </div>
            </div>
          </div>

          
          <div className='flex items-center justify-center lg:pt-16'>
            <div className='w-full max-w-[550px] rounded-2xl bg-[#202124] p-8 shadow-xl sm:p-10'>

              <h2 className='mb-9 text-28 font-semibold'>
                Create your account
              </h2>

              <form>
                <input
                  type="text"
                  placeholder="Mobile Number or Email"
                  className='mb-8 h-[70px] w-full rounded-xl border border-border-slate bg-transparent px-5 text-16 text-text-white outline-none placeholder:text-text-muted focus:border-text-purple'
                />

                <input
                  type="password"
                  placeholder="Password"
                  className='mb-8 h-[70px] w-full rounded-xl border border-border-slate bg-transparent px-5 text-16 text-text-white outline-none placeholder:text-text-muted focus:border-text-purple'
                />

                <button
                  type="button"
                  className='h-[62px] w-full rounded-xl bg-text-purple text-18 font-semibold text-text-white hover:brightness-110'
                >
                  Continue
                </button>
              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SignupPage



