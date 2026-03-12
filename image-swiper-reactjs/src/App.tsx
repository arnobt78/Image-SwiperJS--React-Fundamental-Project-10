/**
 * Root component: wraps the whole app in a centered container.
 * No router; single page with header + slider + nav bar from ImageSlider.
 */
import ImageSlider from "./components/ImageSlider";

function App() {
  return (
    <div className="max-w-[800px] mx-auto px-4">
      <ImageSlider />
    </div>
  );
}

export default App;
