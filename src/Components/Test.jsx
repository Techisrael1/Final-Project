import React from "react";
import "./test.css";
const Test = () => {
	return (
		<div className="screen">
			<div className="card">
				<div className="left">
					<h4>COURSE</h4>
					<h2>JavaScript Fundamentals</h2>

					<p>
						View all chapters{" "}
						<i class="fa-solid fa-angle-right"></i>
					</p>
				</div>
				<div className="right">
					<div className="right-cht">
						<p>CHAPTER 4</p>
						<div class="progress" style={{ height: 5, width: 150 }}>
							<div class="progress-bar w-75 bg-blue"></div>
						</div>
					</div>
					<p className="challenge">6/9 Challenges</p>
					<h3>Callbacks & Closures</h3>
					<button type="submit">Continue</button>
				</div>
			</div>
		</div>
	);
};

export default Test;
