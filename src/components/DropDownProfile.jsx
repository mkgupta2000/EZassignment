import "./DropDownProfile.css";

export const DropDownProfile = () => {
  document.getElementById("myDropdown").classList.toggle("show");
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };

  return (
    <>
      <div class="dropdown">
        <button onclick="DropDownProfile()" class="dropbtn">
          Hi Abhishek
        </button>
        <div id="myDropdown" class="dropdown-content">
          <a href="#account">Account</a>
          <a href="#login">Login</a>
        </div>
      </div>
    </>
  );
};
