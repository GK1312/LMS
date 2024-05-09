import React from "react";

const HeaderComponent = React.memo(function headerComponent() {
  return (
    <>
      <main>
        <h1>Sign In Page</h1>
      </main>
    </>
  );
});

HeaderComponent.displayName = "HeaderComponent";

export default HeaderComponent;
