import scss from './App.module.scss'
const App = () => {
  return (
    <section className={scss.App}>
      <div className='container'>
        <div className={scss.content}>
          App
        </div>
      </div>
    </section>
  );
};

export default App;