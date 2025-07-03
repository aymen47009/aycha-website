import { useState } from "react"; import { Button } from "@/components/ui/button"; import { Input } from "@/components/ui/input";

export default function HomePage() { const [name, setName] = useState("صديقتي الصغيرة"); const [mood, setMood] = useState("");

return ( <div className="min-h-screen bg-pink-50 p-6 text-center"> <h1 className="text-3xl md:text-5xl font-bold text-pink-700 mb-4"> مرحباً، {name} 🌟 </h1>

<div className="max-w-md mx-auto bg-white p-4 rounded-2xl shadow-md">
    <p className="text-lg mb-2 text-gray-700">كيف تشعرين اليوم؟ 😊</p>
    <Input
      placeholder="مثلاً: سعيدة، متحمسة، متوترة..."
      value={mood}
      onChange={(e) => setMood(e.target.value)}
      className="mb-4"
    />
    <p className="text-md text-pink-600">مزاجك الآن: {mood || "؟"}</p>
  </div>

  <div className="mt-10">
    <p className="text-xl text-pink-800 mb-4 font-semibold">
      ماذا ترغبين أن تفعلي؟ 🧠🎨📚
    </p>
    <div className="flex flex-wrap justify-center gap-4">
      <Button variant="outline">📘 دروسي</Button>
      <Button variant="outline">🎨 دفتر الإبداع</Button>
      <Button variant="outline">🧩 ألعاب تعليمية</Button>
      <Button variant="outline">🏆 تحديات</Button>
      <Button variant="outline">🎯 أهدافي</Button>
    </div>
  </div>
</div>

); }

