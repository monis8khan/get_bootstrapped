import { Injectable } from '@angular/core';
import { Tools } from '../interfaces/tools';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {
  private toolsList: Tools[] = [
    {
      id: 1,
      name: "Postman",
      imgurl: 'https://user-images.githubusercontent.com/7853266/44114706-9c72dd08-9fd1-11e8-8d9d-6d9d651c75ad.png',
      download: ''
    }, {
      id: 2,
      name: "Photoshop",
      imgurl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOMAAADeCAMAAAD4tEcNAAAAwFBMVEUAHjYxqP////8AABcyq/8wpvwzrf8zr/8yrP8AECQADCAAGzInitIkfsAAABUAFy0AFjEAEygVUH4rleMAAB0AABMAACgACBwAAA4AFTDa3N4AGjQAABsACCoRRGwAACUwPU4JME8ZXZBET126vcGXnKIhdrUunvAXWIkOPGAsmelTXWng4uQADi12fYYcZZ0FJUAmhcsWKkCgpKprcn1/ho7CxcglNUdIUmATSnQfcKwHKkYbZJq2ub47RlUAAAAuoXB/AAAKFUlEQVR4nO2da3eiOhRAwzM8FESwWK1asIpY322dKe14//+/uqC2vgKCGF6LvWbdmQ+90+weSE5OjhlAXqH1bzB73axAFlltXmeDf61rCiDQb9CXtF5nWmunbeNDuzbt9DSpPwj09HecfNS0Ti1ti1DUOtrjxySy47ovdbIaPRTtjrRZR3J8WWn5iOAxNW31Etqx9azlKYQH2toz6sVEOM4a+YvhD7XGLIRjCzykPdBYPICLUJ47vjXz+ZgeaDffgh3ftbSHeAe09yDHfr6f0x8e+v6Oz9O0R3cnps9+joVRPJM8cuwXR9GV7KMc33tpj+uu9N4vHd+e0h7VnXl6O3dsNdMe091pts4cV3lf+i9pr04dP4qxMJ7y8HHsOGmkPR4sNCZHjpv87jSCqG0OjusiZKkonta/jn+KN+HsaP/5cSxsGN0tyHrv+Pcx7aFg4/HvzrGgk+oOb2p1HQedtAeCkc5g6wiKOuN4tD1BslW0ZPyUp5brOChiGnfgYeA6FnhW9XBnVkBSaY8CMxQJJsVNAHZoE/BSrBLHJb0XUOjV0aMzALMiVeNQTGfgtZhbxwO1V7Apcpbj0d6AbHZs3JPiG5aUlJSUlJSUlJSUlJSkjLhF3qF48O4vF+93RZbFtAcYC70hUYK8+DIMu9v9rI9GI/N7Pnec4Q/O/HvUNXhJ4PNqqquQZeEP7BZuC73D+6P3BYxaNW1JUHLoSRFhoWkWEhUT6HLaY44KxYSW3IqyUDUVPl/BjOi41aSrX0KeLKM7epqwuuDTHnl4bnL0gulQuQnljY4EwVp2XkJ5s6P7wH7npE/mdkeCgEsp7eGHIo4jwaq5mF9jORKcKqQtEIJ4jq5kDh7XmI4EW81+K0lcRwKOlLQdrhHbkeAWWZ934jvSlawvk/EdCVjP+G4L6UjDE1iODpS0Mj63ohxptWvbXdvYYXdHztKCAZ5wlO1AIh0rkniELCtC42uuQj9LepztQKIdL7MXUZGMJfQLpJ3pqTWso4uo2xY6lHQ109usCI4AyILKISWZa8uH6D7vuk5JlK5LkvdfnlcSK2VGcgSgWUFGMvBhFRVdsM1hRbUYzpumacYaq8vhvG7zeiI124iOQLBQjpzjm9DJkuGoHGRp+vin4xVuWchaVXNBYc8FozrKNmri8f0/FMEcBy07Xi1zLmJeeqI6An2JGjH6hZT1OcMG5w9bTcyJUmRHERlIiErMpTrDXhHcfT/MO+3IjqCBeiPh50UoRKXit55eOOoYDW9xVIaIp481zx1lg0GvM3lwlOuIB/BiYlVs+tqLmGFH0UA8gvTw1FG2wwYxk45ARjqeZHPiV3jDTDryKMfTjFX3SWxz46hcjaMwDLVmZNdRXFx7H5FvbL4cUUnAybyqoxP3HDmi147vg2PUMGbQkXcQywJ7lHLy1WhhzKAjpSIUjjeQuo8JC734crtC38lGK2uO4hcyJz88qvIn8gus4cjgKUrXlS+7Pq+q9GHLlTlHAfkkWoeTHX6IepbN5u+WXxRlhdcp+3tJ7Ep9WXMUDdTSRy8Py6OOeJbh6NJCVASqWyXYzDmK6AzmeFpF/Y2WzwVbMs+bFmQztX8UkROOGyfjaMq5fB2DapNKwxx28RauotUeZZ/ao3UodaDSoOD6q4y7zzBKDZnqMuiVj3MODsh5l0n1MrjQZwEyFXAWcPSoIh1ZJ80T9TCO7lxPAbPif6ZzMi+KyOVx3kzvSATt+J/A7xEEXTLqwzEMqCGeFqwa6FlpKaZ2JoI8Y2UqleqeimrRXpHbV9AL40lxVR+jv4p20up7RZ+V00cE2O1DdHrY4ZuSc7QDUunLukNfR/U0S5FHvkUAjq0aVPJnzvEdmfP3DDnp7KGhaspCwprxe5Ds8xELgWUAmmWX3UailnEd4ehiupS7V+oANBybeoLdWTEdoYPYMkjopPYYlpkLiVnGc4RD1JlcqIIOy3wnNf3EcoQOug+An4epWrFMvZHIUhKr19r068tpVkIdd0DVSKLH93ZHjgn4YIAS7jCAho6EP5Q3O8KlEvA6iSDkiQerAuxv5Y2O0PoM3i25kuFO52jGwC15iyMNGVO6NjBRCHtUTuCWjO7IQXUUqqemYYY8SmYwdzJHc6Q5aDnG1Rju4RfhQkmP8VYJwjpu+6KY5bchRagwiY26FeYkkh1iXUL8+5DZPdsWN0utzuuL6B/VlfU5EcLyuCB0f5C1jurCMLr1en00qtc/u/aX3ND1W/sUFcW5bklXcFbK0Y7C4YP0sizG/Bkrgmn51ruSCCTa8c7lJaXRXdKBjXMBjZPxScTR6+5VzHFQMC2MU2tCjsALpr1kfXMfZFPhnUjO0Ut9wJD2sWQx9ncm6eha8mIVnRbgfCGTddx+uAB5MITzeybt6E4/C2TascyV47WKv1JHNWot8aVz93dcXL3poon6nnmKo1yH7FAMjCWqKyJX76PXasZxw0XAFTQN1Ps4zNG8umuno2GlrgvoLJ43rzTc3RtMjp4lsRwB6uLDRu7igVo7IMbeDmyOxLZDblwdGZQu8N69X7Ki8ELDRicBLMblCqfj3pMYV4bO3PTuAhtWGHRijrXVCrfj7i+kOW57F5hvEYvF+Dom43gdLvlaR9KOdBVn0SobjvCr8HHkkq89Ju7IpNDbmbDjZdvEfcmAI/bbadJ3hN+4z5JTd4Qm3mZykLojTXTxt0Pe3VG81oF0EsQK/pNyHLUOfh5c9j8yTKh5BXXHLBev7qDw34H3Hux/kNAyE2pC4pfMJXFr1op3f0XA9Uk0B4lqgo2BPHVJ/G8uKrpYdyrW7vNjv667azpo1enqObuL1wdZESixO3KqFXVseY+HNVYrVWdk6Dqf7cuhIuJ9fkzwrs6hvM/MCUKC1+aUlJSUlJSUlJSUlJSUlJSUlJSUlERglfYAsLMCm3baY8BMewNea2kPAjO1VzCbpj0IzExnYNBJexCY6QzASy/tQWCm9wImWtqDwIw2AWT2/0GteFAkIP8+pj0KrDz+dR0HD2kPAysPA9ex9ZT2MLDy1HIdSVDkTKftCZJkoVfIzmDrOMn6P/4Wh8Zk61jkmdWdVXeO6+KmAdp670j+Keqs0/5D/jiui7p8PK1/HclNMTeRjxvy4FjQqdWbVH8dyY8iJnQPH+SxI7kq3rTTXpGnjq1Ur5HGQrN15ki+FW1ufXojzx3J92IVPXrv5KUj2S9Sbt7pkyhH8rk4ZcjpM4l2LI7kieKpI9kvxjv50Cf9Hcn3ImxBtHcyyJF8a+Y9GWg338hgR7IF8p3WPYDWudKFo5u7NvK7C6k1ZpdCCEeytdHy+cC2tc1FEH0cSfJlpeUvljVt9YK0QTuS5LovdfIUzHZH2qx9XPwc3X3zR03r5COatY5W+5j4mvg7urQGfUnrdaa1rEa0XZt2eprUH6Bew3COW89/g9nrJpvdH6vN62zwL9DP43/7l8ih2B9x+AAAAABJRU5ErkJggg==',
    }, {
      id: 3,
      name: "Wix",
      imgurl: 'https://cdn.worldvectorlogo.com/logos/wix.svg',
    }, {
      id: 4,
      name: "Velo",
      imgurl: 'https://raw.githubusercontent.com/shoonia/vscode-corvid/master/icons/velo.png',
    }, {
      id: 5,
      name: "Visual Studio Code",
      imgurl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png',
    }, {
      id: 6,
      name: "Bootstrap",
      imgurl: 'https://img.icons8.com/color/480/bootstrap.png',
    },
  ]

  getToolsList(){
    return this.toolsList;
  }
  constructor() { }
}
