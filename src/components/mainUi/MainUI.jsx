import Group from "../group/Group"
import GroupMember from "../group/GroupMember"
import Links from "./Links"

function MainUI() {
     return (
          <>

               <div className="container my-4" style={{ maxWidth: '25%' }}>
                    <div className="mb-4 border-bottom">
                         <Links />
                    </div>
                    <div className="mb-4 border-bottom">
                         <Group />
                    </div>
                    <div>
                         <GroupMember />
                    </div>
               </div>

          </>

     )
}


export default MainUI