import React from 'react';
import ToggleArrow from './toggleArrow';
import Ruleid from './ruleid';
import RuleName from './rulename';
import Delete from './deletebutton';
import Enabled from './enabledcheckbox';
import Dropdown from './dropdown';
import './tableFormat.css';



export default class Table extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            condition : false
        };  
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({
            condition: !this.state.condition
        })
    }
    render(){
        const show = this.state.condition ? "show" : "";
        return <table>
    <thead>
    <tr>
    <th></th>
    <th>Rule ID</th>
    <th>Rule Name</th>
    <th>Enabled</th>
    <th>Delete</th>
    <th></th>
    </tr>
    </thead>
    <tbody>
    <tr>
    <td>
    <ToggleArrow value=">" onClick={this.handleClick}></ToggleArrow>
    </td>
    <td>
    <Ruleid/>
    </td>
    <td>
    <RuleName/>
    </td>
    <td>
    <Dropdown/>
    </td>
    <td>
    <Enabled/>
    </td>
    <td>
    <Delete value="Delete"/>
    </td>
    <td>
    <ToggleArrow value=">>" onClick={this.handleClick}></ToggleArrow>
    </td>
    </tr>
    </tbody>
    <tbody className={show}>
    <tr>
    <td>
    <label>Rule - 101</label> <br/><br/>
    <label>Input</label><br/>
    <textarea placeholder="R_File1"></textarea><button>Add</button><button>Delete</button>
    <br/>    
    <label>Type: File</label><br/>
    <label>Search: File ending with RTDMS</label>
    </td>
    <td>
    <br/><br/>
    <label>Schedule</label><br/>
    <textarea placeholder="Sch_Once"></textarea><button>Add</button><button>Delete</button>
    <br/>    
    <label>Type: One Time</label><br/>
    <label>Date/Time:7/31/2019 am</label>
    </td>
    <td>
    <br/><br/>
    <label>Output</label><br/>
    <textarea placeholder="OP_File"></textarea><button>Add</button><button>Delete</button>
    <br/>    
    <textarea placeholder="OP_DB"></textarea><button>Add</button><button>Delete</button>
    <br/>    
    <textarea placeholder="OP_PI"></textarea><button>Add</button><button>Delete</button>
    <br/>    
    </td>
    <td>
    <br/><br/>
    <label>Trigger</label><br/>
    <textarea placeholder="Trigger_Sync"></textarea><button>Add</button><button>Delete</button>
    <br/>    
    <textarea placeholder="Trigger_Overwrite"></textarea><button>Add</button><button>Delete</button>
    <br/>     
    </td>
    </tr>
    </tbody>
    </table>
    }
}