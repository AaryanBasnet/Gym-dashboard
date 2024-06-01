import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Member() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get("http://localhost:8080/members/get");
        console.log('Data fetched:', response.data.data);
        setMembers(response?.data?.data || []);
      } catch (error) {
        console.error('Error fetching data:', error);
        // If there's an error, set members as an empty array
        setMembers([]);
      }
    };

    fetchMembers();
  }, []);

  return (
    <div>
      <h2>Members</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Date of Birth</th>
            {/* <th>MembershipType</th> */}
            <th>Package</th> {/* Add a new table header for Package */}
            <th>Membership Start Date</th>
            <th>Membership End Date</th>
          </tr>
        </thead>
        <tbody>
          {members?.map(member => (
            <tr key={member.id}>
              <td>{member.name}</td>
              <td>{member.email}</td>
              <td>{member.phoneNumber}</td>
              <td>{member.address}</td>
              <td>{member.dateOfBirth}</td>
              {/* <td>{member.membershipType}</td> */}
              <td>{member.membershipType.typeName}</td> {/* Add a new table cell for Package */}
              <td>{member.membershipStartDate}</td>
              <td>{member.membershipEndDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Member;
