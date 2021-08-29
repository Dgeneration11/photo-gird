import React from 'react';

export function Grid({ children, columns }) {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${columns}, minmax(200px,1fr)`,
                gridGap: 10,
                padding: 10,
            }}
        >
            {children}
        </div>
    );
}
