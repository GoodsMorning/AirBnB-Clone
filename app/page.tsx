import Card from "@/components/common/card"

export default function Home() {
  return (
    <main className="px-10 lg:px-20 mt-4 mb-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
      { 
        Array(8).fill(0).map((_,i) => {
          return <Card key={i} />
        })
      }
    </main>
  )
}
