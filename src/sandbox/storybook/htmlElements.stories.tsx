import Title from "@/components/Title";

export default {
	title: "Sandbox/HTML Elements",
};

const HeadingsTemplate = () => (
	<div>
		<h1>Heading h1 | Browser Default</h1>
		<h2>Heading h2 | Browser Default</h2>
		<h3>Heading h3 | Browser Default</h3>
		<h4>Heading h4 | Browser Default</h4>
		<h5>Heading h5 | Browser Default</h5>
		<h6>Heading h6 | Browser Default</h6>
	</div>
);

const ParagraphsTemplate = () => (
	<div>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
			veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
			commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
			velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
			cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
			est laborum.
		</p>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
			veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
			commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
			velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
			cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
			est laborum.
		</p>
	</div>
);

const SpansTemplate = () => (
	<div>
		<span>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
			tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
			veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
			commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
			velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
			cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
			est laborum.
		</span>
	</div>
);

const BlockquotesTemplate = () => (
	<div>
		<blockquote>
			<p>
				A block quotation (also known as a long quotation or extract) is a
				quotation in a written document, that is set off from the main text as a
				paragraph, or block of text.
			</p>
			<p>
				It is typically distinguished visually using indentation and a different
				typeface or smaller size quotation. It may or may not include a
				citation, usually placed at the bottom.
			</p>
			<cite>
				<a href="#!">Said no one, ever.</a>
			</cite>
		</blockquote>
	</div>
);

const ListsTemplate = () => (
	<div>
		<Title as="h2" title="4">
			Definition list
		</Title>
		<dl>
			<dt>Definition List Title</dt>
			<dd>This is a definition list division.</dd>
		</dl>
		<Title as="h2" title="4">
			Ordered List
		</Title>
		<ol>
			<li>List Item 1</li>
			<li>List Item 2</li>
			<li>List Item 3</li>
		</ol>
		<Title as="h2" title="4">
			Unordered List
		</Title>
		<ul>
			<li>List Item 1</li>
			<li>List Item 2</li>
			<li>List Item 3</li>
		</ul>
	</div>
);

const HorizontalRulesTemplate = () => (
	<div>
		<p>Above</p>
		<hr />
		<p>Below</p>
	</div>
);

const TablesTemplate = () => (
	<div>
		<table>
			<caption>Table Caption</caption>
			<thead>
				<tr>
					<th>Table Heading 1</th>
					<th>Table Heading 2</th>
					<th>Table Heading 3</th>
					<th>Table Heading 4</th>
					<th>Table Heading 5</th>
				</tr>
			</thead>
			<tfoot>
				<tr>
					<th>Table Footer 1</th>
					<th>Table Footer 2</th>
					<th>Table Footer 3</th>
					<th>Table Footer 4</th>
					<th>Table Footer 5</th>
				</tr>
			</tfoot>
			<tbody>
				<tr>
					<td>Table Cell 1</td>
					<td>Table Cell 2</td>
					<td>Table Cell 3</td>
					<td>Table Cell 4</td>
					<td>Table Cell 5</td>
				</tr>
				<tr>
					<td>Table Cell 1</td>
					<td>Table Cell 2</td>
					<td>Table Cell 3</td>
					<td>Table Cell 4</td>
					<td>Table Cell 5</td>
				</tr>
				<tr>
					<td>Table Cell 1</td>
					<td>Table Cell 2</td>
					<td>Table Cell 3</td>
					<td>Table Cell 4</td>
					<td>Table Cell 5</td>
				</tr>
				<tr>
					<td>Table Cell 1</td>
					<td>Table Cell 2</td>
					<td>Table Cell 3</td>
					<td>Table Cell 4</td>
					<td>Table Cell 5</td>
				</tr>
			</tbody>
		</table>
	</div>
);

const InlineElementsTemplate = () => (
	<div>
		<p>
			<a href="#!">This is a text link</a>.
		</p>
		<p>
			<strong>Strong is used to indicate strong importance.</strong>
		</p>
		<p>
			<em>This text has added emphasis.</em>
		</p>
		<p>
			The <b>b element</b> is stylistically different text from normal text,
			without any special importance.
		</p>
		<p>
			The <i>i element</i> is text that is offset from the normal text.
		</p>
		<p>
			The <u>u element</u> is text with an unarticulated, though explicitly
			rendered, non-textual annotation.
		</p>
		<p>
			<del>This text is deleted</del> and <ins>This text is inserted</ins>.
		</p>
		<p>
			<s>This text has a strikethrough</s>.
		</p>
		<p>
			Superscript<sup>®</sup>.
		</p>
		<p>
			Subscript for things like H<sub>2</sub>O.
		</p>
		<p>
			<small>This small text is small for for fine print, etc.</small>
		</p>
		<p>
			Abbreviation: <abbr title="HyperText Markup Language">HTML</abbr>
		</p>
		<p>
			<q cite="https://developer.mozilla.org/en-US/docs/HTML/Element/q">
				This text is a short inline quotation.
			</q>
		</p>
		<p>
			<cite>This is a citation.</cite>
		</p>
		<p>
			The <dfn>dfn element</dfn> indicates a definition.
		</p>
		<p>
			The <mark>mark element</mark> indicates a highlight.
		</p>
		<p>
			The <var>variable element</var>, such as <var>x</var> = <var>y</var>.
		</p>
		<p>
			The time element:
			<time dateTime="2013-04-06T12:32+00:00">2 weeks ago</time>
		</p>
	</div>
);

const CodeTemplate = () => (
	<div>
		<p>
			<strong>Keyboard input:</strong> <kbd>Cmd</kbd>
		</p>
		<p>
			<strong>Inline code:</strong> <code>&lt;div&gt;code&lt;/div&gt;</code>
		</p>
		<p>
			<strong>Sample output:</strong>
			<samp>This is sample output from a computer program.</samp>
		</p>
		<Title as="h2" title="4">
			Pre-formatted text
		</Title>
		<pre>
			P R E F O R M A T T E D T E X T ! " # $ % &amp; ' ( ) * + , - . / \ 0 1 2
			3 4 5 6 7 8 9 : ; &lt; = &gt; ? @ A B C D E F G H I J K L M N O P Q R S T
			U V W X Y Z [ \ ] ^ _ ` a b c d e f g h i j k l m n o p q r s t u v w x y
			z | ~ &
		</pre>
	</div>
);

const ImagesTemplate = () => (
	<div>
		<Title as="h3" title="4">
			No <code>&lt;figure&gt;</code> element
		</Title>
		<p>
			<img src="https://placebear.com/480/480" alt="Image alt text" />
		</p>
		<Title as="h3" title="4">
			Wrapped in a <code>&lt;figure&gt;</code> element, no
			<code>&lt;figcaption&gt;</code>
		</Title>
		<figure>
			<img src="https://placebear.com/420/420" alt="Image alt text" />
		</figure>
		<Title as="h3" title="4">
			Wrapped in a <code>&lt;figure&gt;</code> element, with a
			<code>&lt;figcaption&gt;</code>
		</Title>
		<figure>
			<img src="https://placebear.com/420/420" alt="Image alt text" />
			<figcaption>Here is a caption for this image.</figcaption>
		</figure>
	</div>
);

const EmbedsTemplate = () => (
	<div>
		<Title as="h2" title="4">
			Audio
		</Title>
		<div>
			<audio
				controls
				src="https://www.marineband.marines.mil/Portals/175/Docs/Audio/Complete%20Marches%20of%20JPS/Volume%203/53%20The%20Stars%20and%20Stripes%20Forever.mp3"
			/>
			Your browser does not support the <code>audio</code>
		</div>

		<Title as="h2" title="4">
			Video
		</Title>
		<div>
			<video width="400" controls>
				<source
					src="https://www.w3schools.com/html/mov_bbb.mp4"
					type="video/mp4"
				/>
				<source
					src="https://www.w3schools.com/html/mov_bbb.ogg"
					type="video/ogg"
				/>
				Your browser does not support HTML5 video.
			</video>
		</div>

		<Title as="h2" title="4">
			Canvas
		</Title>
		<div>
			<canvas width="300" height="300">
				This accessible, alternative text inside of a &lt;canvas&gt; element
			</canvas>
		</div>

		<Title as="h2" title="4">
			Meter
		</Title>
		<div>
			<meter value="2" min="0" max="10">
				2 out of 10
			</meter>

			<meter min="0" max="100" low={30} high={60} optimum={80} value={80}>
				at 80/100
			</meter>
			<meter min="0" max="100" low={30} high={60} optimum={80} value={60}>
				at 60/100
			</meter>

			<meter min="0" max="100" low={30} high={60} optimum={80} value={34}>
				at 35/100
			</meter>

			<meter min="0" max="100" low={30} high={60} optimum={80} value={50}>
				at 50/100
			</meter>

			<meter min="0" max="100" low={30} high={60} optimum={80} value={70}>
				at 70/100
			</meter>
		</div>

		<Title as="h2" title="4">
			Progress
		</Title>
		<div>
			<progress>progress</progress>
		</div>

		<Title as="h2" title="4">
			Inline SVG
		</Title>
		<div>
			<svg width="100px" height="100px">
				<circle cx="100" cy="100" r="100" fill="#1fa3ec" />
			</svg>
		</div>

		<Title as="h2" title="4">
			IFrame
		</Title>
		<div>
			<iframe
				title="WCAG 2.1"
				src="https://storybook.js.org/"
				width="320"
				height="480"
			/>
		</div>
	</div>
);

const FormsTemplate = () => (
	<div>
		<form>
			<fieldset id="forms__input">
				<legend>Input fields</legend>
				<p>
					<label htmlFor="input__text">
						Text Input
						<input id="input__text" type="text" placeholder="Text Input" />
					</label>
				</p>
				<p>
					<label htmlFor="input__password">
						Password
						<input
							id="input__password"
							type="password"
							placeholder="Type your Password"
						/>
					</label>
				</p>
				<p>
					<label htmlFor="input__webaddress">
						Web Address
						<input
							id="input__webaddress"
							type="url"
							placeholder="http://yoursite.com"
						/>
					</label>
				</p>
				<p>
					<label htmlFor="input__emailaddress">
						Email Address
						<input
							id="input__emailaddress"
							type="email"
							placeholder="name@email.com"
						/>
					</label>
				</p>
				<p>
					<label htmlFor="input__phone">
						Phone Number
						<input id="input__phone" type="tel" placeholder="(999) 999-9999" />
					</label>
				</p>
				<p>
					<label htmlFor="input__search">
						Search
						<input
							id="input__search"
							type="search"
							placeholder="Enter Search Term"
						/>
					</label>
				</p>
				<p>
					<label htmlFor="input__text2">
						Number Input
						<input
							id="input__text2"
							type="number"
							placeholder="Enter a Number"
						/>
					</label>
				</p>
				<p>
					<label htmlFor="input__text3" className="error">
						Error
						<input
							id="input__text3"
							className="is-error"
							type="text"
							placeholder="Text Input"
						/>
					</label>
				</p>
				<p>
					<label htmlFor="input__text4" className="valid">
						Valid
						<input
							id="input__text4"
							className="is-valid"
							type="text"
							placeholder="Text Input"
						/>
					</label>
				</p>
			</fieldset>
			<fieldset id="forms__select">
				<legend>Select menus</legend>
				<p>
					<label htmlFor="select">
						Select
						<select id="select">
							<optgroup label="Option Group">
								<option>Option One</option>
								<option>Option Two</option>
								<option>Option Three</option>
							</optgroup>
						</select>
					</label>
				</p>
			</fieldset>
			<fieldset id="forms__checkbox">
				<legend>Checkboxes</legend>
				<ul className="list list--bare">
					<li>
						<label htmlFor="checkbox1">
							<input id="checkbox1" name="checkbox" type="checkbox" checked />
							Choice A
						</label>
					</li>
					<li>
						<label htmlFor="checkbox2">
							<input id="checkbox2" name="checkbox" type="checkbox" /> Choice B
						</label>
					</li>
					<li>
						<label htmlFor="checkbox3">
							<input id="checkbox3" name="checkbox" type="checkbox" /> Choice C
						</label>
					</li>
				</ul>
			</fieldset>
			<fieldset id="forms__radio">
				<legend>Radio buttons</legend>
				<ul className="list list--bare">
					<li>
						<label htmlFor="radio1">
							<input
								id="radio1"
								name="radio"
								type="radio"
								className="radio"
								checked
							/>
							Option 1
						</label>
					</li>
					<li>
						<label htmlFor="radio2">
							<input id="radio2" name="radio" type="radio" className="radio" />
							Option 2
						</label>
					</li>
					<li>
						<label htmlFor="radio3">
							<input id="radio3" name="radio" type="radio" className="radio" />
							Option 3
						</label>
					</li>
				</ul>
			</fieldset>
			<fieldset id="forms__textareas">
				<legend>Textareas</legend>
				<p>
					<label htmlFor="textarea">
						Textarea
						<textarea
							id="textarea"
							rows={8}
							cols={48}
							placeholder="Enter your message here"
						/>
					</label>
				</p>
			</fieldset>
			<fieldset id="forms__html5">
				<legend>HTML5 inputs</legend>
				<p>
					<label htmlFor="ic">
						Color <input type="text" />
						<input type="color" id="ic" value="#000000" />
					</label>
				</p>
				<p>
					<label htmlFor="in">
						Number <input type="text" />
						<input type="number" id="in" min="0" max="10" value="5" />
					</label>
				</p>
				<p>
					<label htmlFor="ir">
						Range input
						<input type="range" id="ir" value="10" />
					</label>
				</p>
				<p>
					<label htmlFor="idd">
						Date input <input type="date" id="idd" value="1970-01-01" />
					</label>
				</p>
				<p>
					<label htmlFor="idm">
						Month input <input type="month" id="idm" value="1970-01" />
					</label>
				</p>
				<p>
					<label htmlFor="idw">
						Week input <input type="week" id="idw" value="1970-W01" />
					</label>
				</p>
				<p>
					<label htmlFor="idt">
						Datetime input
						<input type="datetime" id="idt" value="1970-01-01T00:00:00Z" />
					</label>
				</p>
				<p>
					<label htmlFor="idtl">
						Datetime-local input
						<input type="datetime-local" id="idtl" value="1970-01-01T00:00" />
					</label>
				</p>
			</fieldset>
			<fieldset id="forms__action">
				<legend>Action buttons</legend>
				{/* <p>
          <input type="submit" value="<input type=submit>" />
          <input type="button" value="<input type=button>" />
          <input type="reset" value="<input type=reset>" />
          <input type="submit" value="<input disabled>" disabled />
        </p> */}
				<p>
					<button type="submit">button type=submit</button>
					<button type="button">button type=button</button>
					<button type="reset">button type=reset</button>
					<button type="button" disabled>
						button disabled
					</button>
				</p>
			</fieldset>
		</form>
	</div>
);

export const Headings = HeadingsTemplate.bind({});
export const Paragraphs = ParagraphsTemplate.bind({});
export const Spans = SpansTemplate.bind({});
export const Blockquotes = BlockquotesTemplate.bind({});
export const Lists = ListsTemplate.bind({});
export const HorizontalRules = HorizontalRulesTemplate.bind({});
export const Tables = TablesTemplate.bind({});
export const Code = CodeTemplate.bind({});
export const InlineElements = InlineElementsTemplate.bind({});
export const Images = ImagesTemplate.bind({});
export const Embeds = EmbedsTemplate.bind({});
export const Forms = FormsTemplate.bind({});
