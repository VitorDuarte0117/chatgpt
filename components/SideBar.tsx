import NewChat from "./NewChat"

const SideBar = () => {
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          <NewChat />
          <div>
            {/* ModelSelection */}
          </div>
        </div>
        {/* Map Trough the chatRows */}
      </div>
    </div>
  )
}

export default SideBar