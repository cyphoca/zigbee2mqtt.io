"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[34013],{32422:(e,n,i)=>{i.r(n),i.d(n,{comp:()=>a,data:()=>s});var t=i(6254);const l={},a=(0,i(39583).A)(l,[["render",function(e,n){const i=(0,t.g2)("RouteLink");return(0,t.uX)(),(0,t.CE)("div",null,[n[8]||(n[8]=(0,t.Lk)("h1",{id:"lidl-fb20-002",tabindex:"-1"},[(0,t.Lk)("a",{class:"header-anchor",href:"#lidl-fb20-002"},[(0,t.Lk)("span",null,"Lidl FB20-002")])],-1)),(0,t.Lk)("table",null,[n[6]||(n[6]=(0,t.Lk)("thead",null,[(0,t.Lk)("tr",null,[(0,t.Lk)("th"),(0,t.Lk)("th")])],-1)),(0,t.Lk)("tbody",null,[n[2]||(n[2]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Model"),(0,t.Lk)("td",null,"FB20-002")],-1)),(0,t.Lk)("tr",null,[n[1]||(n[1]=(0,t.Lk)("td",null,"Vendor",-1)),(0,t.Lk)("td",null,[(0,t.bF)(i,{to:"/supported-devices/#v=Lidl"},{default:(0,t.k6)((()=>n[0]||(n[0]=[(0,t.eW)("Lidl")]))),_:1})])]),n[3]||(n[3]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Description"),(0,t.Lk)("td",null,"Livarno Lux switch and dimming light remote control")],-1)),n[4]||(n[4]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Exposes"),(0,t.Lk)("td",null,"action, linkquality")],-1)),n[5]||(n[5]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Picture"),(0,t.Lk)("td",null,[(0,t.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/FB20-002.png",alt:"Lidl FB20-002"})])],-1))])]),n[9]||(n[9]=(0,t.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Hold the top 2 buttons (on and off) for about 5 seconds until the LED goes from solid green to blinking, then let go.</p><p>For more information, refer to the <a href="https://www.lidl-service.com/static/5027306530/334437_Zigbee_OS_DE_EN%20_FR_NL_PL_CS_SK.PDF" target="_blank" rel="noopener noreferrer">LIDL manual</a>.</p><h3 id="direct-pairing-with-end-device-like-livarno-lux-ceiling-light-14147206l" tabindex="-1"><a class="header-anchor" href="#direct-pairing-with-end-device-like-livarno-lux-ceiling-light-14147206l"><span>Direct Pairing with end device (like Livarno Lux ceiling light 14147206L)</span></a></h3><p>If you have succesfully paired remote and compatible end device like Livarno Lux ceiling light, you can make direct pairing (binding)</p><ol><li>Turn on end device (light)</li><li>Get close with remote to the light max 30cm</li><li>Press and hold the ON button on remote and release when the LED on the remote starts blinking</li><li>After a few second the LED on the remote stays on and the light starts to pulse. The pairing is done.</li></ol><p>Note: Be sure to make direct pairing after you make both devices pair with Z2M.</p><h3 id="on-button" tabindex="-1"><a class="header-anchor" href="#on-button"><span>On Button</span></a></h3><p>The &quot;On&quot; button sends the event only once. The remote remembers the last pressed button and ignores all consequent button presses. More info on the <a href="https://github.com/Koenkk/zigbee2mqtt/issues/6509" target="_blank" rel="noopener noreferrer">issue</a>.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',11)),(0,t.Lk)("p",null,[(0,t.Lk)("em",null,[(0,t.bF)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,t.k6)((()=>n[7]||(n[7]=[(0,t.eW)("How to use device type specific configuration")]))),_:1})])]),n[10]||(n[10]=(0,t.Fv)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span></span>\n<span class="line">  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on</code>, <code>off</code>, <code>brightness_stop</code>, <code>brightness_step_up</code>, <code>brightness_step_down</code>, <code>brightness_move_up</code>, <code>brightness_move_down</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',7))])}]]),s=JSON.parse('{"path":"/devices/FB20-002.html","title":"Lidl FB20-002 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Lidl FB20-002 control via MQTT","description":"Integrate your Lidl FB20-002 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-12-01T19:02:25.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Direct Pairing with end device (like Livarno Lux ceiling light 14147206L)","slug":"direct-pairing-with-end-device-like-livarno-lux-ceiling-light-14147206l","link":"#direct-pairing-with-end-device-like-livarno-lux-ceiling-light-14147206l","children":[]},{"level":3,"title":"On Button","slug":"on-button","link":"#on-button","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1732997586000},"filePathRelative":"devices/FB20-002.md"}')}}]);