
import React from 'react';

const Card = ({ title, content }) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{content}</p>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Clock In</th>
                                <th>Clock Out</th>
                                <th>Time Break</th>
                                <th>Other</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="time" className="form-control" /></td>
                                <td><input type="time" className="form-control" /></td>
                                <td><input type="time" className="form-control" /></td>
                                <td><input type="time" className="form-control" /></td>
                                <td><input type="number" className="form-control" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Card;
