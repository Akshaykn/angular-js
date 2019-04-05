import { Component } from '@angular/core';
import { SERVER_TRANSITION_PROVIDERS } from '@angular/platform-browser/src/browser/server-transition';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
     styleUrls: ['./server.component.css']
})
export class ServerComponent  {
    servername = '';
    output = '';
    servercount = 0;
    servers = [];
    serversOutput = '';
    output2 = '';
    serverbtnclick = false;


    addServerName() {
        this.servers.push(this.servername);
        this.servercount++;
         this.serverbtnclick = true;
    }

    showServers() {
       this.serversOutput = '';
       this.servers.forEach(ele => {
           this.serversOutput = this.serversOutput + '  ' + ele;
       });
       this.output2 = this.serversOutput;
       console.log(this.output2);
    }
    makeserverfalse() {
        this.serverbtnclick = false;
    }
}


