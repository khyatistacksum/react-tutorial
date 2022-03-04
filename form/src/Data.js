import "./index.css";
import ReactDeleteRow from "react-delete-row";
const Data = (props) => {
  return (
    <div>
      <table className="border">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Contact Number</th>
            <th>Email Address</th>
            <th>Password</th>
            <th>Confirm Password</th>
          </tr>
        </thead>

        <tbody>
          {props?.allData?.map((user, id) => {
            return (
              <tr key={id}>
                {user?.map((item, i) => {
                  return (
                    <ReactDeleteRow
                      key={i}
                      data={item}
                      onDelete={() => {
                        return window.confirm(`Are you sure?!`) ;
                      }}
                    >
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.contact}</td>
                      <td>{item.email}</td>
                      <td>{item.password}</td>
                      <td>{item.cpassword}</td>
                    </ReactDeleteRow>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default Data;
