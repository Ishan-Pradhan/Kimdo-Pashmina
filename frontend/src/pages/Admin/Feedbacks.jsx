import { NavLink } from "react-router-dom";
import AdminMenu from "../../components/AdminPage/AdminMenu";
import { useContactContext } from "../../context/contactcontext";

function Feedbacks() {
  const { contacts } = useContactContext();

  return (
    <>
      <section className="container  flex justify-start items-start gap-10 mb-10">
        <AdminMenu />
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Feedbacks</h2>
          <div className="grid grid-cols-5 border-b-2 border-text  py-5 mt-10 gap-10 font-semibold">
            <span>Name</span>
            <span>Email</span>
            <span className="col-span-2">Message</span>
            <span>More Info</span>
          </div>
          <div>
            {contacts.map((contact) => {
              return (
                <>
                  <div className="grid grid-cols-5 my-6  py-5 gap-10 ">
                    <div>{contact.name}</div>
                    <div className="break-words">{contact.email}</div>
                    <div className="col-span-2">{contact.message}</div>
                    <NavLink
                      key={contact._id}
                      to={`/dashboard/admin/feedbacks/${contact._id}`}
                    >
                      <button className="font-bold text-secondary hover:underline">
                        Update
                      </button>
                    </NavLink>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Feedbacks;
