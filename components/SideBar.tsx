"use client"
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

      <img onClick={() => { }} src="img_avatar.png" alt="Profile pic" className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50 " />

    </div>
  )
}

export default SideBar