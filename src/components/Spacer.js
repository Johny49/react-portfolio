import React from "react";

const styles = {
    hr: {
        color: "#022b3a"
    }
};

function Spacer() {
    return (
        <hr className="py-4" style={styles.hr}></hr>
    );
}

export default Spacer;
