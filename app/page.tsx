export default function Home() {
  return (
    <main className="px-10 lg:px-20 mt-4 mb-12">
      <>
      { 
        Array(4).fill(0).map((_,i) => {
          return <div key={i}>Hi : { i+1 }</div>
        })
      }
      </>
    </main>
  )
}
