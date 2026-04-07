"use client";

import { useState } from "react";

const premierPlans = [
  {
    name: "PREMIER 450",
    price: 450,
    internet: "15 GB",
    minutes: "2,500 دقيقة",
    familyLines: 1,
    features: [
      "خصم 190 جنيه من Home DSL",
      "خصم 190 جنيه من Home Wireless",
      "1 جيجابايت Data Roaming أسبوعياً (مرةين سنوياً)",
      "برنامج التقسيط حتى 15,000 جنيه",
    ],
    subscriptions: ["Spotify", "Amazon Prime"],
    color: "from-orange-500 to-orange-600",
  },
  {
    name: "PREMIER 600",
    price: 600,
    internet: "20 GB",
    minutes: "3,500 دقيقة",
    familyLines: 2,
    features: [
      "خصم 210 جنيه من Home DSL",
      "خصم 250 جنيه من Home Wireless",
      "1.5 جيجابايت Data Roaming أسبوعياً (مرةين سنوياً)",
      "15 دقيقة دولية",
      "برنامج التقسيط حتى 20,000 جنيه",
    ],
    subscriptions: ["Spotify", "Amazon Prime", "Gourmet"],
    color: "from-orange-600 to-orange-700",
  },
  {
    name: "PREMIER 750",
    price: 750,
    internet: "25 GB",
    minutes: "5,000 دقيقة",
    familyLines: 3,
    features: [
      "خصم 210 جنيه من Home DSL",
      "خصم 250 جنيه من Home Wireless",
      "10 جيجابايت Data Roaming أسبوعياً (مرة سنوياً)",
      "30 دقيقة دولية",
      "برنامج التقسيط حتى 30,000 جنيه",
    ],
    subscriptions: ["Spotify", "TOD", "Amazon Prime", "Gourmet"],
    color: "from-orange-700 to-orange-800",
  },
  {
    name: "PREMIER 1050",
    price: 1050,
    internet: "40 GB",
    minutes: "7,000 دقيقة",
    familyLines: 4,
    features: [
      "خصم 290 جنيه من Home DSL",
      "خصم 350 جنيه من Home Wireless",
      "10 جيجابايت Data Roaming أسبوعياً (مرةين سنوياً)",
      "45 دقيقة دولية",
      "برنامج التقسيط حتى 40,000 جنيه",
    ],
    subscriptions: ["Spotify", "TOD", "Amazon Prime", "Gourmet"],
    color: "from-orange-800 to-orange-900",
  },
  {
    name: "PREMIER 1500",
    price: 1500,
    internet: "70 GB",
    minutes: "10,000 دقيقة",
    familyLines: 5,
    features: [
      "خصم 420 جنيه من Home DSL",
      "خصم 350 جنيه من Home Wireless",
      "10 جيجابايت Data Roaming أسبوعياً (3 مرات سنوياً)",
      "60 دقيقة دولية",
      "30 دقيقة Roaming صادر",
      "30 دقيقة Roaming وارد",
      "برنامج التقسيط حتى 100,000 جنيه",
    ],
    subscriptions: ["Spotify", "TOD", "Amazon Prime", "Gourmet"],
    color: "from-red-600 to-red-700",
  },
];

function LandingPage({ onEnter }: { onEnter: () => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="mb-6 sm:mb-8 animate-pulse">
          <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center mx-auto">
            <img src="https://assets.kiloapps.io/user_861d0470-6a59-4d61-a9d4-a32ef783b166/63e0d3d2-ed9e-490c-95a6-597d51929f08/89645a7f-07c2-47b9-a5ed-885892a75242.png" alt="Orange Logo" className="w-full h-full object-contain drop-shadow-lg" />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-3 sm:mb-4 tracking-wider text-center leading-tight">
          <span className="text-white">ORANGE</span> <span className="text-white">PREMIER</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-3 sm:mb-4">أحسن نظام شهري في مصر</p>
        
        <p className="text-white text-base sm:text-lg font-bold flex items-center justify-center gap-2 mb-6 sm:mb-8">
          Mohamed issa 🐺
        </p>

        <button
          onClick={onEnter}
          className="group relative px-10 py-4 sm:px-12 sm:py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-lg sm:text-xl font-bold rounded-full shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 transform hover:scale-105 transition-all duration-300 overflow-hidden touch-manipulation"
        >
          <span className="relative z-10 flex items-center gap-3">
            ابدأ الآن
            <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
        <div className="w-2 h-2 bg-orange-500/50 rounded-full animate-pulse delay-75"></div>
        <div className="w-2 h-2 bg-orange-500/30 rounded-full animate-pulse delay-150"></div>
      </div>
    </div>
  );
}

export default function Home() {
  const [showMain, setShowMain] = useState(false);
  const [billAmount, setBillAmount] = useState("");
  const [shippingCost, setShippingCost] = useState("");

  const calculateTax = () => {
    const amount = parseFloat(billAmount) || 0;
    return (amount * 0.14).toFixed(2);
  };

  const calculateTotal = () => {
    const amount = parseFloat(billAmount) || 0;
    return (amount * 1.14).toFixed(2);
  };

  const calculateShippingTax = () => {
    const cost = parseFloat(shippingCost) || 0;
    return (cost * 0.3).toFixed(2);
  };

  const calculateShippingTotal = () => {
    const cost = parseFloat(shippingCost) || 0;
    return (cost * 0.7).toFixed(2);
  };

  if (!showMain) {
    return (
      <>
        <nav className="absolute top-0 left-0 right-0 z-50 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <a href="https://www.orange.eg/ar/myaccount/login?ReturnUrl=/ar/myaccount/" className="text-white font-semibold text-xs sm:text-sm hover:text-orange-400 transition">حسابي</a>
            <a href="https://www.orange.eg/ar/contact-us" className="text-white font-semibold text-xs sm:text-sm hover:text-orange-400 transition">مساعده</a>
            <span className="text-orange-500 font-bold text-xs sm:text-sm">E-Shop</span>
          </div>
        </nav>
        <LandingPage onEnter={() => setShowMain(true)} />
      </>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <header className="bg-gradient-to-r from-orange-500 to-orange-600 py-3 sm:py-6 shadow-2xl sticky top-0 z-50">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="flex items-center justify-center gap-2 sm:gap-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
              <img src="https://assets.kiloapps.io/user_861d0470-6a59-4d61-a9d4-a32ef783b166/63e0d3d2-ed9e-490c-95a6-597d51929f08/89645a7f-07c2-47b9-a5ed-885892a75242.png" alt="Orange Logo" className="w-full h-full object-contain drop-shadow-lg" />
            </div>
            <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-white tracking-wide">
              <span className="text-white">Orange</span> <span className="text-white">PREMIER</span>
            </h1>
          </div>
          <p className="text-center text-orange-100 mt-1 sm:mt-2 text-xs sm:text-base">أحسن نظام شهري في مصر</p>
        </div>
      </header>

      <section className="container mx-auto px-3 sm:px-4 py-8 sm:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-3 sm:mb-4">
          <span className="text-orange-500">باقات</span> PREMIER المتاحة
        </h2>
        <p className="text-center text-slate-400 mb-8 sm:mb-12 text-sm sm:text-lg">اختر الباقة المناسبة لاحتياجاتك</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
          {premierPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-gradient-to-b ${plan.color} rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-orange-500/30`}
            >
              <div className="text-center">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2">{plan.name}</h3>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{plan.price}</div>
                <div className="text-orange-100 text-xs sm:text-sm">جنيه مصري / شهر</div>
              </div>

              <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-4">
                <div className="bg-white/20 rounded-lg sm:rounded-xl p-2 sm:p-3 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-white">{plan.internet}</div>
                  <div className="text-orange-100 text-xs sm:text-sm">إنترنت</div>
                </div>

                <div className="bg-white/20 rounded-lg sm:rounded-xl p-2 sm:p-3 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-white">{plan.minutes}</div>
                  <div className="text-orange-100 text-xs sm:text-sm">دقائق لكل الشبكات</div>
                </div>

                <div className="bg-white/20 rounded-lg sm:rounded-xl p-2 sm:p-3 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-white">{plan.familyLines}</div>
                  <div className="text-orange-100 text-xs sm:text-sm">خط Family</div>
                </div>
              </div>

              <div className="mt-4 sm:mt-6">
                <h4 className="text-white font-semibold mb-1 sm:mb-2 text-xs sm:text-sm">المميزات:</h4>
                <ul className="space-y-1">
                  {plan.features.slice(0, 4).map((feature, i) => (
                    <li key={i} className="text-orange-50 text-xs flex items-start gap-1 sm:gap-2">
                      <span className="text-orange-200">✓</span>
                      <span className="hidden sm:inline">{feature}</span>
                      <span className="sm:hidden">{feature.split(' ').slice(0, 3).join(' ')}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-3 sm:mt-4">
                <h4 className="text-white font-semibold mb-1 sm:mb-2 text-xs sm:text-sm">الاشتراكات:</h4>
                <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
                  {plan.subscriptions.map((sub, i) => (
                    <span key={i} className="bg-white/30 text-white text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          <span className="text-orange-500">المميزات</span> الإضافية
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 border border-orange-500/30 hover:border-orange-400 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl">📱</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">برنامج التقسيط</h3>
                <p className="text-orange-400 text-sm">Device Installment</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center bg-slate-900/50 rounded-lg p-3">
                <span className="text-slate-300">PREMIER 450</span>
                <span className="text-orange-500 font-bold">15,000 ج.م</span>
              </div>
              <div className="flex justify-between items-center bg-slate-900/50 rounded-lg p-3">
                <span className="text-slate-300">PREMIER 600</span>
                <span className="text-orange-500 font-bold">20,000 ج.م</span>
              </div>
              <div className="flex justify-between items-center bg-slate-900/50 rounded-lg p-3">
                <span className="text-slate-300">PREMIER 750</span>
                <span className="text-orange-500 font-bold">30,000 ج.م</span>
              </div>
              <div className="flex justify-between items-center bg-slate-900/50 rounded-lg p-3">
                <span className="text-slate-300">PREMIER 1050</span>
                <span className="text-orange-500 font-bold">40,000 ج.م</span>
              </div>
              <div className="flex justify-between items-center bg-slate-900/50 rounded-lg p-3">
                <span className="text-slate-300">PREMIER 1500</span>
                <span className="text-orange-500 font-bold">100,000 ج.م</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 border border-orange-500/30 hover:border-orange-400 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl">🏠</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">خصومات الإنترنت</h3>
                <p className="text-orange-400 text-sm">Home Discounts</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-slate-400 text-sm mb-2">Home DSL</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-slate-900/50 rounded-lg p-2 text-center">
                    <span className="text-slate-400 text-xs">450 - 600</span>
                    <p className="text-orange-500 font-bold">190-210 ج.م</p>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-2 text-center">
                    <span className="text-slate-400 text-xs">750 - 1050</span>
                    <p className="text-orange-500 font-bold">210-290 ج.م</p>
                  </div>
                  <div className="bg-slate-900/50 rounded-lg p-2 text-center">
                    <span className="text-slate-400 text-xs">1500</span>
                    <p className="text-orange-500 font-bold">420 ج.م</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-slate-400 text-sm mb-2">Home Wireless 5G</p>
                <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                  <p className="text-white font-bold">راوتر 5G</p>
                  <p className="text-green-500 font-bold">2,499 ج.م</p>
                  <p className="text-slate-500 text-xs line-through">5,499 ج.م</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 border border-orange-500/30 hover:border-orange-400 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white text-2xl">✈️</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">السفر و Roaming</h3>
                <p className="text-orange-400 text-sm">Travel Benefits</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-slate-900/50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">📡</span>
                  <span className="text-white font-semibold">Data Roaming</span>
                </div>
                <p className="text-orange-500 font-bold">حتى 10 جيجابايت / سنة</p>
                <p className="text-slate-500 text-xs">حسب الباقة</p>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🌍</span>
                  <span className="text-white font-semibold">دقائق دولية</span>
                </div>
                <p className="text-orange-500 font-bold">حتى 60 دقيقة</p>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🔄</span>
                  <span className="text-white font-semibold">Auto Roaming</span>
                </div>
                <p className="text-orange-500 font-bold">350 ج.م / شهر</p>
                <p className="text-slate-500 text-xs">+ 50 ج.م خدمة</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          <span className="text-orange-500">الترفيه</span> الحصري
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-6 border border-green-500/20 text-center">
            <div className="text-5xl mb-4">🎵</div>
            <h3 className="text-xl font-bold text-white mb-2">Spotify Premium</h3>
            <p className="text-slate-400 text-sm">موسيقى بدون إعلانات</p>
            <p className="text-orange-500 font-bold mt-2">مجاناً حتى 12 شهر</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-6 border border-blue-500/20 text-center">
            <div className="text-5xl mb-4">📺</div>
            <h3 className="text-xl font-bold text-white mb-2">TOD</h3>
            <p className="text-slate-400 text-sm">رياضة، أفلام، مسلسلات</p>
            <p className="text-orange-500 font-bold mt-2">مجاناً من Premier 750</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-6 border border-yellow-500/20 text-center">
            <div className="text-5xl mb-4">📦</div>
            <h3 className="text-xl font-bold text-white mb-2">Amazon Prime</h3>
            <p className="text-slate-400 text-sm">توصيل سريع + Prime Video</p>
            <p className="text-orange-500 font-bold mt-2">مجاناً حتى 12 شهر</p>
          </div>

          <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-6 border border-red-500/20 text-center">
            <div className="text-5xl mb-4">🍽️</div>
            <h3 className="text-xl font-bold text-white mb-2">Gourmet Gold</h3>
            <p className="text-slate-400 text-sm">خصومات حتى 30%</p>
            <p className="text-orange-500 font-bold mt-2">مجاناً من Premier 600</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-3 sm:px-4 py-8 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
          <div className="bg-slate-800/80 backdrop-blur rounded-2xl p-4 sm:p-8 border border-orange-500/30">
            <h2 className="text-lg sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <span className="text-2xl sm:text-3xl">🧾</span>
              حاسبة الضريبة الشهرية
            </h2>
            <p className="text-slate-400 mb-3 sm:mb-4 text-sm sm:text-base">ضريبة القيمة المضافة 14%</p>
            
            <div className="space-y-3 sm:space-y-4">
              <div>
                <label className="text-slate-300 block mb-1 sm:mb-2 text-sm sm:text-base">المبلغ الشهري (جنيه)</label>
                <input
                  type="number"
                  value={billAmount}
                  onChange={(e) => setBillAmount(e.target.value)}
                  placeholder="أدخل المبلغ"
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-white placeholder-slate-400 focus:outline-none focus:border-orange-500 transition text-base touch-manipulation"
                />
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                <div className="bg-orange-500/20 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
                  <div className="text-slate-400 text-xs sm:text-sm">الضريبة (14%)</div>
                  <div className="text-xl sm:text-2xl font-bold text-orange-500">{calculateTax()} ج.م</div>
                </div>
                <div className="bg-green-500/20 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
                  <div className="text-slate-400 text-xs sm:text-sm">الإجمالي</div>
                  <div className="text-xl sm:text-2xl font-bold text-green-500">{calculateTotal()} ج.م</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/80 backdrop-blur rounded-2xl p-4 sm:p-8 border border-blue-500/30">
            <h2 className="text-lg sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <span className="text-2xl sm:text-3xl">📱</span>
              حاسبة شحن الرصيد
            </h2>
            <p className="text-slate-400 mb-3 sm:mb-4 text-sm sm:text-base">ضريبة 30% تخصم من المبلغ المشحون</p>
            
            <div className="space-y-3 sm:space-y-4">
              <div>
                <label className="text-slate-300 block mb-1 sm:mb-2 text-sm sm:text-base">المبلغ المراد شحنه (جنيه)</label>
                <input
                  type="number"
                  value={shippingCost}
                  onChange={(e) => setShippingCost(e.target.value)}
                  placeholder="أدخل المبلغ"
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition text-base touch-manipulation"
                />
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                <div className="bg-red-500/20 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
                  <div className="text-slate-400 text-xs sm:text-sm">الضريبة (30%)</div>
                  <div className="text-xl sm:text-2xl font-bold text-red-500">{calculateShippingTax()} ج.م</div>
                </div>
                <div className="bg-green-500/20 rounded-lg sm:rounded-xl p-3 sm:p-4 text-center">
                  <div className="text-slate-400 text-xs sm:text-sm">الرصيد المستلم</div>
                  <div className="text-xl sm:text-2xl font-bold text-green-500">{calculateShippingTotal()} ج.م</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 py-6 sm:py-8 mt-4 sm:mt-8">
        <div className="container mx-auto px-3 sm:px-4 text-center">
          <p className="text-white text-base sm:text-lg font-bold flex items-center justify-center gap-2">
            Mohamed issa 🐺
          </p>
          <p className="text-slate-500 text-xs sm:text-sm mt-2">جميع الأسعار غير شاملة الضريبة | للاشتراك قم بزيارة أقرب فرع اورانج</p>
          <p className="text-slate-600 text-xs mt-3 sm:mt-4">© 2026 Orange Egypt PREMIER</p>
        </div>
      </footer>
    </main>
  );
}
