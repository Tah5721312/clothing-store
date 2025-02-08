import React from "react";
import PropTypes from "prop-types";

const Colors = ({ colors }) => {
  if (!colors || colors.length === 0) {
    return <p>No colors available</p>; // في حال كانت الألوان غير موجودة
  }

  return (
    <div className="colors">
      {colors.map((color, index) => (
        <button
          style={{ background: color }}
          key={index}
          onClick={() => console.log(`Selected color: ${color}`)}
        >
          {/* يمكن إضافة أي وظيفة أخرى، مثل تغيير الصورة حسب اللون */}
        </button>
      ))}
    </div>
  );
};

// التحقق من نوع البيانات المدخلة
Colors.propTypes = {
  colors: PropTypes.array.isRequired,
};

export default Colors;
