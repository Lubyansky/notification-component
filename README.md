# notification-component
## API
### Inputs
<table>
  <tr>
    <th>Input</th>
    <th>Type</th>
    <th>Default</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>[status]</td>
    <td>'success' | 'error'</td>
    <td>'success'</td>
    <td>yes</td>
    <td>Responsible for the notification icon.</td>
  </tr>
  <tr>
    <td>[label]</td>
    <td>`string`</td>
    <td>''</td>
    <td>yes</td>
    <td>Notification label.</td>
  </tr>
  <tr>
    <td>[text]</td>
    <td>`string`</td>
    <td>''</td>
    <td>no</td>
    <td>Notification text.</td>
  </tr>
</table>

### Outputs
<table>
  <tr>
    <th>Output</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>(onClosed)</td>
    <td>Fired when the progress bar animation stops.</td>
  </tr>
</table>