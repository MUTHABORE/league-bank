import React from "react";

function App() {
  return (
    <React.Fragment>
      <header className="site-header">
        <section className="header-menu center">
          <a href="#" className="site-logo">
            {/* <h1 className="visually-hidden">ЛИГА Банк. Кредиты на любой случай</h1> */}
            <h2 className="site-logo__title site-logo__title--header">ЛИГА Банк</h2>
          </a>
          <nav className="navigation">
            <ul className="navigation__list navigation__list--header">
              <li className="navigation__list-item navigation__list-item--header">
                <a className="navigation__item-link  navigation__item-link--header" href="#">Услуги</a>
              </li>
              <li className="navigation__list-item navigation__list-item--header">
                <a className="navigation__item-link  navigation__item-link--header" href="#">Рассчитать кредит</a>
              </li>
              <li className="navigation__list-item navigation__list-item--header">
                <a className="navigation__item-link  navigation__item-link--header" href="#">Конвертер валют</a>
              </li>
              <li className="navigation__list-item navigation__list-item--header">
                <a className="navigation__item-link  navigation__item-link--header" href="#">Контакты</a>
              </li>
              <li className="navigation__list-item navigation__list-item--header">
                <a className="navigation__item-link  navigation__item-link--header" href="#">Задать вопрос</a>
              </li>
            </ul>
          </nav>
          <a className="header-menu__login" href="#">Войти в Интернет-банк</a>
        </section>
      </header>

      <main>
        <section className="credit">
          <div className="credit__container">
            <div className="credit__block">
              <h2 className="credit__title">Лига Банк</h2>
              <p className="credit__text">Кредиты на любой случай</p>
              <a className="credit__button" href="#">Рассчитать кредит</a>
            </div>
            <div className="credit__cards"></div>
          </div>
        </section>

        <div className="converter center">
          <form className="converter__container" action="">
            <fieldset className="converter__changers">
              <legend className="converter__title">Конвертер валют</legend>
              <div className="converter__changer">
                <p className="converter__changer-title">У меня есть</p>
                <input className="converter__input" placeholder="1000" type="text"></input>
                <select className="converter__select">
                  <option className="converter__select-item">RUB</option>
                  <option className="converter__select-item">USD</option>
                  <option className="converter__select-item">EUR</option>
                  <option className="converter__select-item">GBR</option>
                  <option className="converter__select-item">CNY</option>
                </select>
              </div>
              <div className="converter__arrows"></div>
              <div className="converter__changer">
                <p className="converter__changer-title">Хочу приобрести</p>
                <input className="converter__input" placeholder="13.14636" type="text"></input>
                <select className="converter__select">
                  <option className="converter__select-item">USD</option>
                  <option className="converter__select-item">RUB</option>
                  <option className="converter__select-item">EUR</option>
                  <option className="converter__select-item">GBR</option>
                  <option className="converter__select-item">CNY</option>
                </select>
              </div>
            </fieldset>
            <input className="converter__calendar" type="date" value="01.12.2021"></input>
            <button className="converter__submit" type="submit">Сохранить результат</button>
          </form>



          <div className="history">
            <h3 className="history__title">История конвертация</h3>
            <ul className="history__list">
              <li className="history__list-item">
                <p className="history__date">25.11.2020</p>
                <div className="history__values">
                  <p className="history__value">1000<span className="history__currency"> RUB</span></p>
                  <p className="history__value history__value--after">13.14636<span className="history__currency"> USD</span></p>
                </div>
              </li>
              <li className="history__list-item">
                <p className="history__date">25.11.2020</p>
                <div className="history__values">
                  <p className="history__value">1000<span className="history__currency"> RUB</span></p>
                  <p className="history__value history__value--after">13.14636<span className="history__currency"> USD</span></p>
                </div>
              </li>              <li className="history__list-item">
                <p className="history__date">25.11.2020</p>
                <div className="history__values">
                  <p className="history__value">1000<span className="history__currency"> RUB</span></p>
                  <p className="history__value history__value--after">13.14636<span className="history__currency"> USD</span></p>
                </div>
              </li>              <li className="history__list-item">
                <p className="history__date">25.11.2020</p>
                <div className="history__values">
                  <p className="history__value">1000<span className="history__currency"> RUB</span></p>
                  <p className="history__value history__value--after">13.14636<span className="history__currency"> USD</span></p>
                </div>
              </li>              <li className="history__list-item">
                <p className="history__date">25.11.2020</p>
                <div className="history__values">
                  <p className="history__value">1000<span className="history__currency"> RUB</span></p>
                  <p className="history__value history__value--after">13.14636<span className="history__currency"> USD</span></p>
                </div>
              </li>              <li className="history__list-item">
                <p className="history__date">25.11.2020</p>
                <div className="history__values">
                  <p className="history__value">1000<span className="history__currency"> RUB</span></p>
                  <p className="history__value history__value--after">13.14636<span className="history__currency"> USD</span></p>
                </div>
              </li>              <li className="history__list-item">
                <p className="history__date">25.11.2020</p>
                <div className="history__values">
                  <p className="history__value">1000<span className="history__currency"> RUB</span></p>
                  <p className="history__value history__value--after">13.14636<span className="history__currency"> USD</span></p>
                </div>
              </li>              <li className="history__list-item">
                <p className="history__date">25.11.2020</p>
                <div className="history__values">
                  <p className="history__value">1000<span className="history__currency"> RUB</span></p>
                  <p className="history__value history__value--after">13.14636<span className="history__currency"> USD</span></p>
                </div>
              </li>              <li className="history__list-item">
                <p className="history__date">25.11.2020</p>
                <div className="history__values">
                  <p className="history__value">1000<span className="history__currency"> RUB</span></p>
                  <p className="history__value history__value--after">13.14636<span className="history__currency"> USD</span></p>
                </div>
              </li>              <li className="history__list-item">
                <p className="history__date">25.11.2020</p>
                <div className="history__values">
                  <p className="history__value">1000<span className="history__currency"> RUB</span></p>
                  <p className="history__value history__value--after">13.14636<span className="history__currency"> USD</span></p>
                </div>
              </li>
            </ul>
            <button className="history__clear">Очистить историю</button>
          </div>
        </div>

      </main>

      <footer className="footer">
        <div className="address">
          <a href="#" className="site-logo">
            {/* <h1 className="visually-hidden">ЛИГА Банк. Кредиты на любой случай</h1> */}
            <h2 className="site-logo__title site-logo__title--footer">ЛИГА Банк</h2>
          </a>
          <div className="address__location">
            <p className="address__text">150015, г. Москва, ул. Московская, д. 32 Генеральная лицензия Банка России №1050 Ⓒ Лига Банк, 2019</p>
          </div>
        </div>
        <nav className="navigation">
            <ul className="navigation__list navigation__list--footer">
              <li className="navigation__list-item navigation__list-item--footer">
                <a className="navigation__item-link  navigation__item-link--footer" href="#">Услуги</a>
              </li>
              <li className="navigation__list-item navigation__list-item--footer">
                <a className="navigation__item-link  navigation__item-link--footer" href="#">Рассчитать кредит</a>
              </li>
              <li className="navigation__list-item navigation__list-item--footer">
                <a className="navigation__item-link  navigation__item-link--footer" href="#">Контакты</a>
              </li>
              <li className="navigation__list-item navigation__list-item--footer">
                <a className="navigation__item-link  navigation__item-link--footer" href="#">Задать вопрос</a>
              </li>
            </ul>
          </nav>
        <div className="hotline">
          <div className="hotline__phone hotline__phone--cell">
            <p className="hotline__title hotline__title--cellphone">*0904</p>
            <small className="hotline__info hotline__info--cellphone">Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2</small>
          </div>
          <div className="hotline__phone hotline__phone--regular">
            <p className="hotline__title hotline__title--phone">8 800 111 22 33</p>
            <small className="hotline__info hotline__info--phone">Бесплатный для всех городов России</small>
          </div>
        </div>
        <ul className="social">
          <li className="social__item">
            <a class="social__link social__link--facebook" href="#"></a>
          </li>
          <li className="social__item">
            <a class="social__link social__link--instagram" href="#"></a>
          </li>
          <li className="social__item">
            <a class="social__link social__link--twitter" href="#"></a>
          </li>
          <li className="social__item">
            <a class="social__link social__link--youtube" href="#"></a>
          </li>
        </ul>
      </footer>
    </React.Fragment>
  );
}

export default App;
