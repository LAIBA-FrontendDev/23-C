export default function AccountPage() {
  return (
    <main className="py-32 bg-[#FAFAFA] min-h-screen">
      <section className="mx-auto max-w-6xl px-6">
        
        {/* Header Section */}
        <div className="border-b border-[#D4AF37]/30 pb-6 mb-10 text-center md:text-left">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#5B0A18] tracking-wide">
            My Account
          </h1>
          <p className="text-xs uppercase tracking-widest text-[#D4AF37] mt-2 font-medium">
            Manage your profile and exclusive orders
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          
          {/* Profile Overview Card */}
          <div className="rounded-2xl bg-[#FAF7F2] p-8 border border-[#D4AF37]/20 shadow-sm flex flex-col justify-between h-fit">
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#5B0A18] mb-4">
                Profile Details
              </h2>
              <div className="space-y-3 text-sm text-gray-700">
                <p><span className="font-semibold text-gray-900">Guest User</span></p>
                <p className="italic text-gray-500">Authentication system pending integration</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200/60">
              <button 
                disabled 
                className="w-full bg-[#800020]/20 text-[#800020] px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-bold cursor-not-allowed text-center"
              >
                Edit Profile
              </button>
            </div>
          </div>

          {/* Orders History Showcase Card */}
          <div className="lg:col-span-2 rounded-2xl bg-white p-8 border border-gray-100 shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-[#5B0A18] mb-6">
              Recent Orders
            </h2>
            
            <div className="flex flex-col items-center justify-center py-12 border-2 border-dashed border-gray-200 rounded-xl p-6">
              <p className="text-gray-500 font-serif italic text-center mb-2">
                No orders placed yet under this profile.
              </p>
              <p className="text-xs text-gray-400 text-center max-w-sm">
                Once authentication is connected, your full purchase history with 23 Collections will appear here.
              </p>
            </div>
          </div>

        </div>

      </section>
    </main>
  );
}

