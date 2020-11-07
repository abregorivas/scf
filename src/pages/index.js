import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="max-w-2xl mb-8">
      <h1>Typograpy</h1>
      <h1 className="h900">Heading 1</h1>
      <h2 className="h800">Heading 2</h2>
      <h3 className="h700">Heading 3</h3>
      <h4 className="h600">Heading 4</h4>
      <h5 className="h500">Heading 5</h5>
      <h6 className="h400">Heading 6</h6>
      <br />
      <div className="container">
        <pre className="font-code">
          <code className="block">
            {`{blockquote background: #f9f9f9; 
            border-left: 10px solid #ccc;}
            `}
            {`margin: 1.5em 10px; 
            padding: 0.75em 10px;
             padding-top: 1.75em;
            `}
          </code>
        </pre>
      </div>
      <br />
      <p className="mt-8 font-sans">
        Keeping typography consistent and sticking to logical hierarchies
        ensures that elements in the UI are clear and easily recognizable when
        scanning the page. Text sizes, styles, and layouts were selected to
        balance content and UI and to foster familiarity.
      </p>
      <br />
      <blockquote className=" quote">
        <p>
          This is supposed to be a quote.Text sizes, styles, and layouts were
          selected to balance content and UI and to foster familiarity.
        </p>
      </blockquote>
      <br />
      <a>This is link</a>

      <ol className="list-decimal">
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </ol>
      <ul className="list-disc">
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
      </ul>
    </div>
    <h1 className="h900">Colors</h1>
    <div className="container flex ">
      <div className="w-16 h-16 px-4 py-4 bg-primary-900">900</div>
      <div className="w-16 h-16 px-4 py-4 bg-primary-800">800</div>
      <div className="w-16 h-16 px-4 py-4 bg-primary-700">700</div>
      <div className="w-16 h-16 px-4 py-4 bg-primary-600">600</div>
      <div className="w-16 h-16 px-4 py-4 bg-primary-500">500</div>
      <div className="w-16 h-16 px-4 py-4 bg-primary-400">400</div>
      <div className="w-16 h-16 px-4 py-4 bg-primary-300">300</div>
    </div>
    <div className="container flex mt-8">
      <div className="w-16 h-16 px-4 py-4 bg-error-900">900</div>
      <div className="w-16 h-16 px-4 py-4 bg-error-800">800</div>
      <div className="w-16 h-16 px-4 py-4 bg-error-700">700</div>
      <div className="w-16 h-16 px-4 py-4 bg-error-600">600</div>
      <div className="w-16 h-16 px-4 py-4 bg-error-500">500</div>
      <div className="w-16 h-16 px-4 py-4 bg-error-400">400</div>
      <div className="w-16 h-16 px-4 py-4 bg-error-300">300</div>
    </div>
    <div className="container flex mt-8">
      <div className="w-16 h-16 px-4 py-4 bg-warning-900">900</div>
      <div className="w-16 h-16 px-4 py-4 bg-warning-800">800</div>
      <div className="w-16 h-16 px-4 py-4 bg-warning-700">700</div>
      <div className="w-16 h-16 px-4 py-4 bg-warning-600">600</div>
      <div className="w-16 h-16 px-4 py-4 bg-warning-500">500</div>
      <div className="w-16 h-16 px-4 py-4 bg-warning-400">400</div>
      <div className="w-16 h-16 px-4 py-4 bg-warning-300">300</div>
    </div>
    <div className="container flex mt-8">
      <div className="w-16 h-16 px-4 py-4 bg-success-900">900</div>
      <div className="w-16 h-16 px-4 py-4 bg-success-800">800</div>
      <div className="w-16 h-16 px-4 py-4 bg-success-700">700</div>
      <div className="w-16 h-16 px-4 py-4 bg-success-600">600</div>
      <div className="w-16 h-16 px-4 py-4 bg-success-500">500</div>
      <div className="w-16 h-16 px-4 py-4 bg-success-400">400</div>
      <div className="w-16 h-16 px-4 py-4 bg-success-300">300</div>
    </div>
    <div className="container flex mt-8">
      <div className="w-16 h-16 px-4 py-4 bg-accent-900">900</div>
      <div className="w-16 h-16 px-4 py-4 bg-accent-800">800</div>
      <div className="w-16 h-16 px-4 py-4 bg-accent-700">700</div>
      <div className="w-16 h-16 px-4 py-4 bg-accent-600">600</div>
      <div className="w-16 h-16 px-4 py-4 bg-accent-500">500</div>
      <div className="w-16 h-16 px-4 py-4 bg-accent-400">400</div>
      <div className="w-16 h-16 px-4 py-4 bg-accent-300">300</div>
    </div>
    <div className="container flex mt-8">
      <div className="w-16 h-16 px-4 py-4 bg-info-900">900</div>
      <div className="w-16 h-16 px-4 py-4 bg-info-800">800</div>
      <div className="w-16 h-16 px-4 py-4 bg-info-700">700</div>
      <div className="w-16 h-16 px-4 py-4 bg-info-600">600</div>
      <div className="w-16 h-16 px-4 py-4 bg-info-500">500</div>
      <div className="w-16 h-16 px-4 py-4 bg-info-400">400</div>
      <div className="w-16 h-16 px-4 py-4 bg-info-300">300</div>
    </div>
    <div className="container flex mt-8">
      <div className="w-16 h-16 px-4 py-4 bg-grayDark-900">900</div>
      <div className="w-16 h-16 px-4 py-4 bg-grayDark-800">800</div>
      <div className="w-16 h-16 px-4 py-4 bg-grayDark-700">700</div>
      <div className="w-16 h-16 px-4 py-4 bg-grayDark-600">600</div>
      <div className="w-16 h-16 px-4 py-4 bg-grayDark-500">500</div>
    </div>
    <div className="container flex mt-8">
      <div className="w-16 h-16 px-4 py-4 bg-grayMid-900">900</div>
      <div className="w-16 h-16 px-4 py-4 bg-grayMid-800">800</div>
      <div className="w-16 h-16 px-4 py-4 bg-grayMid-700">700</div>
      <div className="w-16 h-16 px-4 py-4 bg-grayMid-600">600</div>
      <div className="w-16 h-16 px-4 py-4 bg-grayMid-500">500</div>
      <div className="w-16 h-16 px-4 py-4 bg-grayMid-400">400</div>
      <div className="w-16 h-16 px-4 py-4 bg-grayMid-300">300</div>
      <div className="w-16 h-16 px-4 py-4 bg-grayMid-200">200</div>
    </div>
    <div className="container flex mt-8">
      <div className="w-16 h-16 px-4 py-4 bg-grayLight-900">900</div>
      <div className="w-16 h-16 px-4 py-4 bg-grayLight-800">800</div>
      <div className="w-16 h-16 px-4 py-4 bg-grayLight-700">700</div>
      <div className="w-16 h-16 px-4 py-4 bg-grayLight-600">600</div>
      <div className="w-16 h-16 px-4 py-4 bg-grayLight-500">500</div>
    </div>
    <button className="bg-teal-500 btn">Button</button>
    <br />
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
