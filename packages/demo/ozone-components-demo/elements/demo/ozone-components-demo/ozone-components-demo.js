import "polymer/polymer.html"
import "polymer/polymer-element.html"
import "marked-element/marked-element.html"
import "iron-pages/iron-pages.html"
import "paper-tabs/paper-tabs.html"
import "paper-tabs/paper-tab.html"
import "../demo-header/demo-header.html"
import "ozone-free-text-search"
import "ozone-login/ozone-login.html"
import "ozone-mosaic"
import "ozone-upload"
import "ozone-item-preview"
import "../ozone-edit-panel"
import "../video-edit-panel"
import 'ozone-media-edit'
//import 'ozone-item-edit/src/ozone-item-edit.ts'
import './ozone-components-demo.html'

/**
 * @customElement
 * @polymer
 */
class OzoneComponentsDemo extends Polymer.Element {
    static get is() { return 'ozone-components-demo'; }
    static get properties() {
        return {
            search: {
                type: String,
                value: ''
            },
            type: {
                type: String,
                value: 'item'
            },
            result: {
                type: Array
            },
            autoCompleteResult: {
                type: Array
            },
            numberOfResults: {
                type: Number
            },
            selectedPage: {
                type: Number
            },
            isConnected: {
                type: Boolean,
                observer: "_isConnectedChange"
            }
        };
    }

    ready() {
        super.ready();
        this.$.editPanel.addEventListener('save-tap', (event) => {
            this.$.ozoneMosaic.saveSelectedItem(event.detail)
                .then((item) => {
                    this.$.editPanel.set('selectedItem', item)
                });
        });
        this.$.editPanel.addEventListener('close-tap', (event) => {
            this.$.editPanel.set('display', false);
        });
        this.$.videoEditPanel.addEventListener('close-tap', (event) => {
            this.$.videoEditPanel.set('display', false);
        });
        this.$.ozoneMosaic.addEventListener('edit-item', (event) => {
            this.$.editPanel.set('display', true);
            this.$.editPanel.set('selectedItem', event.detail);
        });

        this.$.ozoneMosaic.addEventListener('info-item', (event) => {
            this.$.videoEditPanel.set('display', true);
            this.$.videoEditPanel.set('selectedItem', event.detail);
        });

        this.$.freeTextSearch.addEventListener("taktik-search", () => this._searchSubmit());
    }

    _isConnectedChange(value) {
        if(this.isConnected){
        }

    }

    _searchSubmit (){
        this.$.ozoneMosaic.searchQuery
            .quicksearch(this.search)
            .setSize(5)
            .order('creationDate').ASC;
        this.$.ozoneMosaic.search()
    }

}

window.customElements.define(OzoneComponentsDemo.is, OzoneComponentsDemo);