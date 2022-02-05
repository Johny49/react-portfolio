import React from "react";

const styles = {
    header: {
        color: '#022b3a',
        backgroundColor: '#e1e5f2',
    },
};

function Header() {
    return (
        <header className="header">
            <h1 className="p-md-4 p-sm-1" style={styles.header}>Geoffrey Johnson</h1>
        </header>
    );
}

export default Header;