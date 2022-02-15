import React from 'react';

export const Loader = () =>
    (
        <div className="d-flex justify-content-center align-items-center text-primary">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
