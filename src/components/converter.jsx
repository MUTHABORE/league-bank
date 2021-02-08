import React from 'react';
import moment from 'moment';

const Converter = () => {
	return (
		<form className="converter__container" action="">
			<fieldset className="converter__changers">
				<legend className="converter__title">Конвертер валют</legend>
				<div className="converter__changer">
					<p className="converter__changer-title">У меня есть</p>
					<input className="converter__input" name="firstValue" placeholder="0" type="text"></input>
					<label className="converter__select-wrapper">
						<select className="converter__select">
							<option className="converter__select-item" selected>RUB</option>
							<option className="converter__select-item">USD</option>
							<option className="converter__select-item">EUR</option>
							<option className="converter__select-item">GBP</option>
							<option className="converter__select-item">CNY</option>
						</select>
						<span className="converter__select-arrow"></span>
					</label>
				</div>
				<div className="converter__arrows"></div>
				<div className="converter__changer">
					<p className="converter__changer-title">Хочу приобрести</p>
					<input className="converter__input" name="secoundValue" placeholder="0" type="text"></input>
					<div className="converter__select-wrapper">
						<select className="converter__select">
							<option className="converter__select-item">RUB</option>
							<option className="converter__select-item" selected>USD</option>
							<option className="converter__select-item">EUR</option>
							<option className="converter__select-item">GBP</option>
							<option className="converter__select-item">CNY</option>
						</select>
						<span className="converter__select-arrow"></span>
					</div>
				</div>
			</fieldset>
			<label className="converter__calendar-wrapper">
				<input className="converter__calendar" type="text" placeholder={moment().format(`YYYY-MM-DD`)}></input>
				<span className="converter__calendar-image"></span>
			</label>
			<button className="converter__submit" type="submit">Сохранить результат</button>
		</form>
	)
};

export default Converter;
