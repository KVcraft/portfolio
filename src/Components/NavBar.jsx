import './NavBar.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

function NavBar() {
  return (
    <nav>
      <h1>Kavindu Viduranga</h1>
      <ul>
        <li><a href='#about'><i class="bi bi-person-fill"></i>About me</a></li>
        <li><a href='#skills'><i class="bi bi-lightning-fill"></i>Skills</a></li>
        <li><a href='#projects'><i class="bi bi-gear-fill"></i>Projects</a></li>
        <li><a href='#contact'><i class="bi bi-envelope-fill"></i>Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;