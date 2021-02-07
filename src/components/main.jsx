import React from 'react';

const Main = () => {
	return (
		<main>

			<section className="credit">
				<div className="credit__background"></div>
				<div className="credit__container">
					<div className="credit__block">
						<h2 className="credit__title">Лига Банк</h2>
						<p className="credit__text">Кредиты на любой случай</p>
						<a className="credit__button" href="#">Рассчитать кредит</a>
					</div>
				</div>
			</section>

			<section className="converter center">
				<form className="converter__container" action="">
					<fieldset className="converter__changers">
						<legend className="converter__title">Конвертер валют</legend>
						<div className="converter__changer">
							<p className="converter__changer-title">У меня есть</p>
							<input className="converter__input" placeholder="0" type="text"></input>
							<label className="converter__select-wrapper">
								<select className="converter__select">
									<option className="converter__select-item" selected>RUB</option>
									<option className="converter__select-item">USD</option>
									<option className="converter__select-item">EUR</option>
									<option className="converter__select-item">GBR</option>
									<option className="converter__select-item">CNY</option>
								</select>
								<span className="converter__select-arrow"></span>
							</label>
						</div>
						<div className="converter__arrows"></div>
						<div className="converter__changer">
							<p className="converter__changer-title">Хочу приобрести</p>
							<input className="converter__input" placeholder="0" type="text"></input>
							<div className="converter__select-wrapper">
								<select className="converter__select">
									<option className="converter__select-item">RUB</option>
									<option className="converter__select-item" selected>USD</option>
									<option className="converter__select-item">EUR</option>
									<option className="converter__select-item">GBR</option>
									<option className="converter__select-item">CNY</option>
								</select>
								<span className="converter__select-arrow"></span>
							</div>
						</div>
					</fieldset>
					<label className="converter__calendar-wrapper">
						<input className="converter__calendar" type="text" placeholder="01.12.2021"></input>
						<span className="converter__calendar-image"></span>
					</label>
					<button className="converter__submit" type="submit">Сохранить результат</button>
				</form>

				<section className="history">
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
				</section>
			</section>

		</main>
	);
};

export default Main;
