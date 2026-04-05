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

export default function Home() {
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

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <header className="bg-gradient-to-r from-orange-500 to-orange-600 py-6 shadow-2xl">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
              <span className="text-orange-600 text-3xl font-bold">O</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide">
              Orange <span className="text-orange-200">PREMIER</span>
            </h1>
          </div>
          <p className="text-center text-orange-100 mt-3 text-lg">أفضل أنظمة الدفع الآجل في مصر 2026</p>
        </div>
      </header>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          <span className="text-orange-500">باقات</span> PREMIER المتاحة
        </h2>
        <p className="text-center text-slate-400 mb-12 text-lg">اختر الباقة المناسبة لاحتياجاتك</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {premierPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-gradient-to-b ${plan.color} rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-orange-500/30`}
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-white mb-1">{plan.price}</div>
                <div className="text-orange-100 text-sm">جنيه مصري / شهر</div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="bg-white/20 rounded-xl p-3 text-center">
                  <div className="text-2xl font-bold text-white">{plan.internet}</div>
                  <div className="text-orange-100 text-sm">إنترنت</div>
                </div>

                <div className="bg-white/20 rounded-xl p-3 text-center">
                  <div className="text-2xl font-bold text-white">{plan.minutes}</div>
                  <div className="text-orange-100 text-sm">دقائق لكل الشبكات</div>
                </div>

                <div className="bg-white/20 rounded-xl p-3 text-center">
                  <div className="text-2xl font-bold text-white">{plan.familyLines}</div>
                  <div className="text-orange-100 text-sm">خط Family</div>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-white font-semibold mb-2 text-sm">المميزات:</h4>
                <ul className="space-y-1">
                  {plan.features.slice(0, 4).map((feature, i) => (
                    <li key={i} className="text-orange-50 text-xs flex items-start gap-2">
                      <span className="text-orange-200">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="text-white font-semibold mb-2 text-sm">الاشتراكات:</h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {plan.subscriptions.map((sub, i) => (
                    <span key={i} className="bg-white/30 text-white text-xs px-2 py-1 rounded-full">
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
          <span className="text-orange-500">الخدمات</span> الإضافية
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-orange-500/20">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-bold text-white">برنامج التقسيط</h3>
            </div>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-2"><span className="text-orange-500">▸</span> حتى 15,000 جنيه ل Premier 450</li>
              <li className="flex items-center gap-2"><span className="text-orange-500">▸</span> حتى 20,000 جنيه ل Premier 600</li>
              <li className="flex items-center gap-2"><span className="text-orange-500">▸</span> حتى 30,000 جنيه ل Premier 750</li>
              <li className="flex items-center gap-2"><span className="text-orange-500">▸</span> حتى 40,000 جنيه ل Premier 1050</li>
              <li className="flex items-center gap-2"><span className="text-orange-500">▸</span> حتى 100,000 جنيه ل Premier 1500</li>
            </ul>
          </div>

          <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-orange-500/20">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-bold text-white">خصومات المنزل</h3>
            </div>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-2"><span className="text-orange-500">▸</span> Home DSL بخصم حتى 420 جنيه</li>
              <li className="flex items-center gap-2"><span className="text-orange-500">▸</span> Home Wireless بخصم حتى 350 جنيه</li>
              <li className="flex items-center gap-2"><span className="text-orange-500">▸</span> راوتر 5G بسعر 2,499 جنيه</li>
              <li className="flex items-center gap-2"><span className="text-orange-500">▸</span> صالح لمشتركي Premier</li>
            </ul>
          </div>

          <div className="bg-slate-800/50 backdrop-blur rounded-2xl p-8 border border-orange-500/20">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">✈️</span>
              </div>
              <h3 className="text-xl font-bold text-white">سفر وإ roaming</h3>
            </div>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-2"><span className="text-orange-500">▸</span> حتى 10 جيجابايت Data Roaming</li>
              <li className="flex items-center gap-2"><span className="text-orange-500">▸</span> حتى 60 دقيقة دولية</li>
              <li className="flex items-center gap-2"><span className="text-orange-500">▸</span> Roaming تلقائي بـ 350 جنيه</li>
              <li className="flex items-center gap-2"><span className="text-orange-500">▸</span> خدمة 50 جنيه / شهر أثناء السفر</li>
            </ul>
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

      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-slate-800/80 backdrop-blur rounded-2xl p-8 border border-orange-500/30">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">🧾</span>
              حاسبة الضريبة الشهرية
            </h2>
            <p className="text-slate-400 mb-4">ضريبة القيمة المضافة 14%</p>
            
            <div className="space-y-4">
              <div>
                <label className="text-slate-300 block mb-2">المبلغ الشهري (جنيه)</label>
                <input
                  type="number"
                  value={billAmount}
                  onChange={(e) => setBillAmount(e.target.value)}
                  placeholder="أدخل المبلغ"
                  className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-orange-500 transition"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-orange-500/20 rounded-xl p-4 text-center">
                  <div className="text-slate-400 text-sm">الضريبة (14%)</div>
                  <div className="text-2xl font-bold text-orange-500">{calculateTax()} جنيه</div>
                </div>
                <div className="bg-green-500/20 rounded-xl p-4 text-center">
                  <div className="text-slate-400 text-sm">الإجمالي</div>
                  <div className="text-2xl font-bold text-green-500">{calculateTotal()} جنيه</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/80 backdrop-blur rounded-2xl p-8 border border-blue-500/30">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-3xl">📱</span>
              حاسبة شحن الرصيد
            </h2>
            <p className="text-slate-400 mb-4">ضريبة 30% تخصم من المبلغ المشحون</p>
            
            <div className="space-y-4">
              <div>
                <label className="text-slate-300 block mb-2">المبلغ المراد شحنه (جنيه)</label>
                <input
                  type="number"
                  value={shippingCost}
                  onChange={(e) => setShippingCost(e.target.value)}
                  placeholder="أدخل المبلغ"
                  className="w-full bg-slate-700 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 transition"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-red-500/20 rounded-xl p-4 text-center">
                  <div className="text-slate-400 text-sm">الضريبة (30%)</div>
                  <div className="text-2xl font-bold text-red-500">{calculateShippingTax()} جنيه</div>
                </div>
                <div className="bg-green-500/20 rounded-xl p-4 text-center">
                  <div className="text-slate-400 text-sm">الرصيد المستلم</div>
                  <div className="text-2xl font-bold text-green-500">{calculateShippingTotal()} جنيه</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-950 py-8 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white text-lg font-bold flex items-center justify-center gap-2">
            Mohamed issa 🐺
          </p>
          <p className="text-slate-500 text-sm mt-2">جميع الأسعار غير شاملة الضريبة | للاشتراك قم بزيارة أقرب فرع اورانج</p>
          <p className="text-slate-600 text-xs mt-4">© 2026 Orange Egypt PREMIER | معلومات الباقات من الموقع الرسمي</p>
        </div>
      </footer>
    </main>
  );
}
