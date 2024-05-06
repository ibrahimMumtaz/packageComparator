import "./PackageComparison.css";

function PackageComparison() {
  return (
    <div className="comparison-div">
      <div className="comparison-heading">
        <h2>Comparison</h2>
        <hr/>
 
    <table className="comparison-table">
      
      <thead>
        <tr>
          <th>Package Name</th>
          <th>react-query (v3.39.0)</th>
          <th>swr (v1.3.0)</th>
        </tr>
      </thead>
      
      <tbody>
        <tr>
          <td>Description</td>
          <td>Hooks for managing, caching, and syncing asynchronous and remote data</td>
          <td>React Hooks library for remote data fetching</td>
        </tr>
        <tr>
          <td>Keywords</td>
          <td>...</td>
          <td>...</td>
        </tr>
        <tr>
          <td>Repository</td>
          <td><a href="" target="_blank" rel="noreferrer">HomePage</a>&nbsp;
              <a href="" target="_blank" rel="noreferrer">Bugs</a>&nbsp;
              <a href="" target="_blank" rel="noreferrer">GitHub</a>&nbsp;</td>
          <td><a href="" target="_blank" rel="noreferrer">HomePage</a>&nbsp;
              <a href="" target="_blank" rel="noreferrer">Bugs</a>&nbsp;
              <a href="" target="_blank" rel="noreferrer">GitHub</a>&nbsp;</td>
        </tr>
        <tr>
          <td>License</td>
          <td>
          <div className="licence-class">
            MIT
            </div>
            </td>
          <td>
          <div className="licence-class">
            MIT
            </div>
          </td>
        </tr>
        
        <tr>
          <td>Last Modification Date</td>
          <td>...</td>
          <td>...</td>
        </tr>
        <tr>
          <td>Authors/Publishers</td>
          <td>...</td>
          <td>...</td>
        </tr>
        <tr>
          <td>Maintainers</td>
          <td>...</td>
          <td>...</td>
        </tr>
      </tbody>
    </table>
    
    </div>
    <div className="recommendation">
    <h2>react-query is 1.47x better!</h2>
        <hr />
        <div className="package-name">
        <h3>React-Query</h3>
        <div class="recommendation-button">Recommended</div>
        </div>
        <div className="comparison-recommendation">
        <div className="recommendation-info">
        <p>Hooks for managing, caching, and syncing asynchronous and remote data in React. For more information visit our repository.</p>
        <button className="button1">Typescript</button>
        <button className="button2">JavaScript</button>
        <div className="repositorydocumentation"> 
        <a href="" target="_blank" rel="noreferrer">Repository</a>&nbsp;&nbsp;&nbsp;
        <a href="" target="_blank" rel="noreferrer">Documentation</a>
        </div>
        </div>
        <div className="recommendation2div">
          <div>
            <p className="lightgreytext">Downloads</p>
            <p><b>512k+</b></p>
          </div>
          <div>
            <p className="lightgreytext">Stars</p>
            <p><b>24.7k+</b></p>
          </div>
          <div>
            <p  className="lightgreytext">Health</p>
            <p><b>75%</b></p>
          </div>
        </div>
      </div>
    </div>

    </div>
    
  );
}

  export default PackageComparison;
  