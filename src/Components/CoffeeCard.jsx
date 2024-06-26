import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, quantity, supplier, taste, photo } = coffee || {};

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your coffee has been deleted.",
                            icon: "success"
                        });
                        // eslint-disable-next-line react/prop-types
                        const remaining = coffees.filter(cof => cof._id !== _id)
                        setCoffees(remaining)
                    }
                })
            }
        });
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl flex justify-around">
            <figure><img src={photo} alt="Coffee" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{quantity}</p>
                <p>{supplier}</p>
                <p>{taste}</p>
            </div>
            <div className="card-actions justify-end mr-8 mt-10">
                <div className="join join-vertical space-y-4">
                    <button className="btn join-item">View</button>
                    <Link to={`/updateCoffee/${_id}`}><button className="btn join-item">Edit</button></Link>
                    <button onClick={() => handleDelete(_id)} className="btn join-item">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;