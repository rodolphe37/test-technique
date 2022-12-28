import Thermostat from 'components/Thermostat'

export default function HomePage() {
  return (
    <div className="w-screen h-screen p-4">
      <div className="flex flex-1 w-full h-full min-h-2xl rounded-xl  bg-cover min-h-xl bg-[url('/assets/living-room.jpg')]">
        <div className="flex flex-1 items-center justify-center ">
          <div className="flex items-center space-x-8">
            <Thermostat />
          </div>
        </div>
      </div>
    </div>
  )
}
