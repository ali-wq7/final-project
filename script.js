"use strict";

// 1. Translations and small shared helpers.
const words = {
  brand:["لُبس.","LUBS."], title:["لُبس | ملابس يومية","LUBS | Everyday wear"],
  skip:["انتقل إلى المنتجات","Skip to products"], promo:["شحن مجاني للطلبات من ٣٠٠ ر.س","Free shipping on orders of SAR 300+"],
  shop:["تسوق","Shop"], about:["عن لُبس","About LUBS"], controls:["أدوات المتجر","Store controls"], navigation:["القائمة الرئيسية","Main navigation"],
  dark:["الوضع الداكن","Dark mode"], light:["الوضع الفاتح","Light mode"], account:["الحساب","Account"], favorites:["المفضلة","Favorites"], cart:["السلة","Shopping bag"], close:["إغلاق","Close"],
  heroLabel:["أساسيات لُبس / ٢٠٢٦","THE LUBS ESSENTIALS / 2026"], heroOne:["قطع بسيطة.","LESS EFFORT."], heroTwo:["إطلالة تشبهك.","MORE YOU."],
  heroDescription:["اختيارات يومية، سهلة التنسيق وعلى راحتك.","Everyday pieces. Easy to style, comfortable to wear."], discover:["تسوق المجموعة","Shop the edit"],
  tagline:["على ذوقك. على راحتك.","Your style. Your comfort."], heroAlt:["هودي أبيض معلق بدون أشخاص","A white hoodie on a hanger, without people"], edit:["اختيارات كل يوم","THE EVERYDAY EDIT"],
  shippingShort:["شحن مجاني من ٣٠٠ ر.س","Free shipping from SAR 300"], returnShort:["استبدال خلال ١٤ يومًا","14-day exchanges"], carefully:["قطع مختارة بعناية","Thoughtfully selected pieces"],
  collectionLabel:["خزانتك، بطريقتك","YOUR WARDROBE, YOUR WAY"], collectionTitle:["اختياراتك اليومية.","Your everyday edit."], refresh:["تحديث المنتجات","Refresh products"],
  all:["الكل","All"], men:["رجال","Men"], women:["نساء","Women"], sale:["التخفيضات","Sale"], categories:["تصنيفات المنتجات","Product categories"],
  search:["البحث","Search"], searchPlaceholder:["ابحث عن قطعة...","Find your next piece..."], sort:["ترتيب المنتجات","Sort products"], featured:["المختارة لك","Featured"], low:["الأقل سعرًا","Price: low to high"], high:["الأعلى سعرًا","Price: high to low"], nameSort:["الاسم","Name"],
  items:["قطع","pieces"], emptyTitle:["لا توجد قطع مطابقة","No matching pieces"], emptyText:["جرّب بحثًا مختلفًا أو تصفح المجموعة.","Try another search or browse the full edit."], reset:["عرض الكل","Show all pieces"],
  loading:["جاري تحديث المجموعة...","Refreshing the edit..."], apiLoaded:["تم تحديث المجموعة","The edit is up to date"], apiCached:["تتعذر المزامنة الآن؛ نعرض آخر مجموعة محفوظة","Could not refresh. Showing your saved edit."], apiFailed:["تعذر التحديث. المجموعة الأساسية متاحة","Could not refresh. Our core collection is available."],
  new:["جديد","New"], best:["الأكثر طلبًا","Best seller"], chooseSize:["اختر المقاس","Choose size"], view:["تفاصيل","Details"], save:["أضف للمفضلة","Save to favorites"], unsave:["أزل من المفضلة","Remove from favorites"],
  color:["اللون","Color"], white:["أبيض","White"], blue:["أزرق","Blue"], camel:["جملي","Camel"], black:["أسود","Black"], charcoal:["فحمي","Charcoal"], cream:["كريمي","Cream"], asShown:["كما في الصورة","As pictured"],
  productDescription:["قطعة سهلة التنسيق من اختياراتنا اليومية. اختر مقاسك وأضفها لإطلالتك.","An easy-to-style piece from our everyday edit. Pick your size and make it yours."],
  size:["المقاس","Size"], guide:["دليل المقاسات","Size guide"], add:["أضف للسلة","Add to bag"], added:["أضفنا القطعة للسلة","Added to your bag"], saved:["تمت الإضافة للمفضلة","Saved to favorites"], removedFavorite:["تمت الإزالة من المفضلة","Removed from favorites"], limit:["الحد الأقصى ١٠ قطع لكل مقاس","Maximum 10 pieces per size"], invalidProduct:["اختر منتجًا ومقاسًا صالحين","Choose a valid product and size"],
  emptyBag:["سلتك تنتظر اختياراتك","Your bag is waiting"], emptyBagText:["اكتشف قطعة جديدة تناسب يومك.","Find a new piece for your everyday."], continueShopping:["تابع التسوق","Continue shopping"], remove:["حذف","Remove"], decrease:["تقليل الكمية","Decrease quantity"], increase:["زيادة الكمية","Increase quantity"],
  shippingFree:["وصلت للشحن المجاني!","You unlocked free shipping!"], shippingRemaining:["المتبقي للشحن المجاني:","Away from free shipping:"], coupon:["كود الخصم","Discount code"], apply:["تطبيق","Apply"], couponHint:["جرّب LUBS10 لخصم ١٠٪","Try LUBS10 for 10% off"], couponApplied:["تم تطبيق خصم ١٠٪","10% discount applied"], invalidCoupon:["الكود غير صالح. جرّب LUBS10","Invalid code. Try LUBS10"],
  subtotal:["المجموع الفرعي","Subtotal"], discount:["الخصم","Discount"], shipping:["الشحن","Shipping"], free:["مجاني","Free"], total:["الإجمالي","Total"], checkout:["إتمام الطلب","Checkout"], demoShort:["طلب تجريبي · لا يتم تحصيل أي مبلغ","Demo order · No payment is taken"],
  checkoutDemo:["طلب للعرض فقط. استخدم بيانات وهمية؛ لن تُحفظ أو تُرسل.","Demo checkout. Use fictional details; they are not saved or sent."], customerName:["الاسم","Name"], phone:["رقم الجوال","Mobile number"], phoneHelp:["رقم سعودي: 05 ثم ثمانية أرقام","Saudi number: 05 followed by eight digits"], address:["عنوان التوصيل","Delivery address"], addressPlaceholder:["المدينة، الحي، الشارع (بيانات تجريبية)","City, neighborhood, street (fictional details)"], confirmOrder:["تأكيد الطلب التجريبي","Confirm demo order"],
  orderSuccess:["اكتملت تجربة الطلب!","Your demo order is complete!"], orderNote:["لم يتم الدفع أو إرسال أي بيانات.","No payment was taken and no details were sent."],
  login:["تسجيل الدخول","Log in"], register:["إنشاء حساب","Create account"], logout:["تسجيل الخروج","Log out"], welcome:["أهلًا برجعتك","Welcome back"], myAccount:["حسابي","My account"], email:["البريد الإلكتروني","Email"], password:["كلمة المرور","Password"], confirmPassword:["تأكيد كلمة المرور","Confirm password"], passwordHint:["٦ أحرف على الأقل","At least 6 characters"],
  accountDemo:["حساب تجريبي في هذا المتصفح فقط. استخدم بيانات وهمية وكلمة مرور غير مستخدمة في حساباتك.","Demo account stored only in this browser. Use fictional details and a password you do not use elsewhere."], checking:["جاري التحقق...","Checking..."], nameError:["اكتب اسمًا من حرفين على الأقل","Enter a name with at least two characters"], mismatch:["كلمتا المرور غير متطابقتين","Passwords do not match"], duplicate:["البريد مسجل مسبقًا. استخدم تسجيل الدخول","This email is registered. Please log in."], wrongLogin:["البريد أو كلمة المرور غير صحيحة","Incorrect email or password"], registered:["تم إنشاء حسابك التجريبي","Your demo account is ready"], loggedIn:["تم تسجيل الدخول","You are logged in"], loggedOut:["تم تسجيل الخروج","You are logged out"], storageBlocked:["تعذر الحفظ؛ اسمح بالتخزين المحلي في المتصفح","Could not save. Allow local storage in your browser."], secureContext:["افتح الموقع عبر رابط HTTPS أو localhost لإنشاء الحساب","Open the HTTPS site or localhost to create an account"],
  shippingPolicy:["الشحن والاستبدال","Shipping & exchanges"], copyright:["© ٢٠٢٦ لُبس","© 2026 LUBS"],
  aboutText:["لُبس يجمع أساسيات يومية بتفاصيل بسيطة. هويتنا: شعار L، أخضر ليموني، وحبر داكن. قطع أقل، تنسيق أسهل.","LUBS brings together everyday essentials with simple details. Our identity: the L monogram, electric lime, and dark ink. Easy pieces, everyday style."],
  demoInfo:["نسخة تعليمية لمتجر ملابس؛ الحسابات والطلبات محلية وتجريبية.","An educational clothing-store demo. Accounts and orders are local and illustrative."],
  shippingText:["الشحن ٢٥ ر.س، ومجاني من ٣٠٠ ر.س قبل الخصم. التوصيل المقترح خلال ٣–٥ أيام عمل داخل السعودية.","Shipping is SAR 25, or free from SAR 300 before discounts. Illustrative delivery: 3–5 business days within Saudi Arabia."],
  returnsText:["استبدال مقترح خلال ١٤ يومًا للقطع بحالتها الأصلية. الطلبات في هذه النسخة لا تُشحن فعليًا.","Illustrative exchanges within 14 days for unworn items. Orders in this demo are not actually shipped."],
  guideText:["قياسات تقريبية لقطع الجزء العلوي بالسنتيمتر. مقاسات الجينز 30–36 هي قياسات الخصر بالبوصة.","Approximate upper-body measurements in centimeters. Jeans sizes 30–36 are waist measurements in inches."], chest:["الصدر","Chest"], waist:["الخصر","Waist"], back:["العودة للمنتج","Back to product"]
};
const $ = selector => document.querySelector(selector);
const read = (key,fallback) => {try{return JSON.parse(localStorage.getItem(key))??fallback;}catch{return fallback;}};
const write = (key,value) => {try{localStorage.setItem(key,JSON.stringify(value));return true;}catch{return false;}};
const preferences=read("lubs-prefs-v1",{});
let lang=preferences?.lang==="en"?"en":"ar", theme=preferences?.theme==="dark"?"dark":"light";
const t = key => words[key]?.[lang==="ar"?0:1]??key;
const text = pair => pair[lang==="ar"?0:1];
const esc = value => String(value).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const icon = name => `<svg aria-hidden="true"><use href="#i-${name}"/></svg>`;
const money = value => new Intl.NumberFormat(lang==="ar"?"ar-SA":"en-SA",{maximumFractionDigits:2}).format(value)+" "+(lang==="ar"?"ر.س":"SAR");
let noticeTimer, activeView=null, apiMessage="loading";
function notify(message){clearTimeout(noticeTimer);$("#notice").textContent=message;$("#notice").classList.add("visible");noticeTimer=setTimeout(()=>$("#notice").classList.remove("visible"),2600);}

// 2. One catalog and one local cart. Existing saved baskets stay compatible.
const products = [
  [1,["تيشيرت بطبعة عصرية","Graphic T-shirt"],"men",89,119,"product-1.webp","#fafafa","white"],
  [2,["بلوزة يومية","Everyday blouse"],"women",149,0,"product-2.jpg","#fafafa","white"],
  [3,["جينز مستقيم","Straight-leg jeans"],"men",189,229,"product-3.jpg","#5e7b96","blue"],
  [4,["هودي يومي","Everyday hoodie"],"men",169,0,"product-4.jpg","#fafafa","white"],
  [5,["معطف شتوي","Winter coat"],"women",299,349,"product-5.jpg","#b69f7b","camel"],
  [6,["فستان سهرة","Evening dress"],"women",219,0,"product-6.webp","#222222","black"],
  [7,["بليزر كلاسيكي","Classic blazer"],"women",249,0,"product-7.jpg","#373638","charcoal"],
  [8,["كنزة ناعمة","Soft knit sweater"],"men",159,199,"knitwear.jpg","#e8dfce","cream"],
  [1083,["قميص كاروهات أزرق","Blue checked shirt"],"men",112,0,"api-1083.webp","#5e7b96","asShown"],
  [1084,["تيشيرت بطبعة عصرية","Graphic T-shirt"],"men",94,0,"api-1084.webp","#fafafa","white"],
  [1177,["فستان بنقشة زهور","Floral evening dress"],"women",487,0,"api-1177.webp","#222222","asShown"],
  [1178,["فستان سهرة أحمر","Red evening dress"],"women",337,0,"api-1178.webp","#ad3341","asShown"]
].map(([id,name,group,price,old,image,color,colorKey])=>({id,name,group,price,old,image:"assets/"+image,color,colorKey,sizes:id===3?["30","32","34","36"]:["S","M","L","XL"],apiId:id>1000?id-1000:null,enabled:id<1000}));
const product = id => products.find(p=>p.id===Number(id));
const cached=read("lubs-api-products",[]);
if(Array.isArray(cached))cached.forEach(item=>{const p=product(item?.id);if(p?.apiId&&Number.isFinite(item.price)&&item.price>0){p.price=item.price;p.enabled=true;}});
const saved=read("lubs-store-v1",{});
const state={cart:[],favorites:[],filter:"all",query:"",sort:"featured",favoritesOnly:false,coupon:false};
if(Array.isArray(saved?.cart))saved.cart.forEach(item=>{const p=product(item?.id);if(p&&p.sizes.includes(item.size)&&Number.isInteger(item.qty)&&item.qty>0&&item.qty<=10){const same=state.cart.find(x=>x.id===p.id&&x.size===item.size);if(same)same.qty=Math.min(10,same.qty+item.qty);else state.cart.push({id:p.id,size:item.size,qty:item.qty});}});
if(Array.isArray(saved?.favorites))state.favorites=[...new Set(saved.favorites.map(Number).filter(id=>product(id)))];
const persist = () => write("lubs-store-v1",{cart:state.cart,favorites:state.favorites});
function totals(){const subtotal=state.cart.reduce((sum,item)=>sum+product(item.id).price*item.qty,0),discount=state.coupon?Math.round(subtotal*10)/100:0,shipping=subtotal&&subtotal<300?25:0;return {subtotal,discount,shipping,total:Math.round((subtotal-discount+shipping)*100)/100};}
function syncHeader(){
  const count=state.cart.reduce((sum,item)=>sum+item.qty,0),user=currentUser();
  $("#cart-count").textContent=count;$("#favorite-count").textContent=state.favorites.length;$("#favorite-count").hidden=!state.favorites.length;
  for(const [id,label] of [["cart-open",t("cart")+" · "+count],["favorites-open",t("favorites")+" · "+state.favorites.length],["account-open",user?t("account")+" · "+user.name:t("account")]]){$("#"+id).setAttribute("aria-label",label);$("#"+id).title=label;}
  $("#favorites-open").setAttribute("aria-pressed",String(state.favoritesOnly));$("#account-open").classList.toggle("logged-in",!!user);
}
function renderProducts(){
  const list=products.filter(p=>(p.enabled||state.favoritesOnly&&state.favorites.includes(p.id))&&(state.filter==="all"||p.group===state.filter||state.filter==="sale"&&p.old>p.price)&&(!state.favoritesOnly||state.favorites.includes(p.id))&&p.name.join(" ").toLowerCase().includes(state.query.toLowerCase()));
  if(state.sort==="low")list.sort((a,b)=>a.price-b.price);if(state.sort==="high")list.sort((a,b)=>b.price-a.price);if(state.sort==="name")list.sort((a,b)=>text(a.name).localeCompare(text(b.name),lang));
  $("#product-grid").innerHTML=list.map(p=>`<article class="product-card"><section class="product-media ${p.image.endsWith(".webp")?"cutout":""}"><button class="product-photo" data-product="${p.id}" aria-label="${t("view")} ${esc(text(p.name))}"><img src="${p.image}" alt="${esc(text(p.name))}" width="600" height="800" loading="lazy"></button>${p.old?`<span class="product-badge sale">−${Math.round((1-p.price/p.old)*100)}%</span>`:`<span class="product-badge">${t("new")}</span>`}<button class="icon-button favorite-button ${state.favorites.includes(p.id)?"saved":""}" data-favorite="${p.id}" aria-pressed="${state.favorites.includes(p.id)}" aria-label="${state.favorites.includes(p.id)?t("unsave"):t("save")} ${esc(text(p.name))}">${icon("heart")}</button><button class="quick-add" data-product="${p.id}">${icon("plus")}${t("chooseSize")}</button></section><section class="product-meta"><p>${t(p.group)}</p><h3><button class="name-button" data-product="${p.id}">${esc(text(p.name))}</button></h3><section class="price-row"><span class="price">${money(p.price)}${p.old?`<span class="old-price">${money(p.old)}</span>`:""}</span><span class="color-swatch" style="background:${p.color}" title="${t(p.colorKey)}" aria-label="${t(p.colorKey)}"></span></section></section></article>`).join("");
  $("#results-count").textContent=`${state.favoritesOnly?t("favorites")+" · ":""}${list.length} ${t("items")}`;$("#empty-state").hidden=!!list.length;$("#api-status").textContent=t(apiMessage);
  document.querySelectorAll("[data-filter]").forEach(b=>{b.classList.toggle("active",b.dataset.filter===state.filter);b.setAttribute("aria-pressed",String(b.dataset.filter===state.filter));});document.querySelectorAll("[data-nav]").forEach(a=>{if(a.dataset.nav===state.filter&&!state.favoritesOnly)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current");});syncHeader();
}
function addProduct(id,size){
  const p=product(id);if(!p||!p.sizes.includes(size))throw Error(t("invalidProduct"));
  const item=state.cart.find(x=>x.id===p.id&&x.size===size);if(item?.qty>=10){notify(t("limit"));return false;}
  if(item)item.qty++;else state.cart.push({id:p.id,size,qty:1});notify(t(persist()?"added":"storageBlocked"));syncHeader();return true;
}
function resetFilters(){Object.assign(state,{filter:"all",query:"",sort:"featured",favoritesOnly:false});$("#search").value="";$("#sort").value="featured";renderProducts();}

// 3. A single dialog serves product, cart, checkout, account and information views.
const heading = key => `<h2 class="dialog-heading" id="dialog-title">${t(key)}</h2>`;
function openView(type,data={}){activeView={type,...data};renderView();if(!$("#dialog").open)$("#dialog").showModal();const target=$("#dialog-title");if(target){target.tabIndex=-1;target.focus();}}
function renderView(){
  const v=activeView;if(!v)return;$("#dialog").className=v.type==="product"?"product-window":v.type==="cart"?"cart-window":"";
  const body=v.type==="product"?productView(product(v.id)):v.type==="cart"?cartView():v.type==="checkout"?checkoutView():v.type==="account"?accountView(v.mode):v.type==="success"?successView(v):infoView(v);
  $("#dialog-body").innerHTML=body;
}
function productView(p){return `<section class="detail-layout"><img class="detail-photo ${p.image.endsWith(".webp")?"cutout":""}" src="${p.image}" alt="${esc(text(p.name))}"><section class="detail-copy"><p class="eyebrow">${t(p.group)}</p><h2 id="dialog-title">${esc(text(p.name))}</h2><p class="price">${money(p.price)}${p.old?`<span class="old-price">${money(p.old)}</span>`:""}</p><p class="description">${t("productDescription")}</p><p class="eyebrow">${t("color")}: ${t(p.colorKey)}</p><form id="product-form" data-id="${p.id}"><fieldset class="size-field"><legend>${t("chooseSize")}</legend><section class="sizes">${p.sizes.map(size=>`<label class="size-option"><input type="radio" name="size" value="${size}" required><span>${size}</span></label>`).join("")}</section></fieldset><button class="text-button" data-guide="${p.id}" type="button">${t("guide")}</button><button class="btn brand-button w-100" type="submit">${t("add")}</button></form><p class="dialog-note">${t("shippingShort")}</p></section></section>`;}
function cartView(){
  if(!state.cart.length){state.coupon=false;return heading("cart")+`<section class="empty-state"><h3>${t("emptyBag")}</h3><p>${t("emptyBagText")}</p><button class="btn brand-button" data-close>${t("continueShopping")}</button></section>`;}
  const sum=totals();return heading("cart")+state.cart.map(item=>{const p=product(item.id);return `<article class="cart-item"><img src="${p.image}" alt="${esc(text(p.name))}"><section class="cart-item-info"><h3>${esc(text(p.name))}</h3><p>${t("size")}: <bdi>${item.size}</bdi> · ${t(p.colorKey)}</p><strong class="price">${money(p.price*item.qty)}</strong><section class="cart-item-controls"><section class="quantity"><button data-quantity="-1" data-id="${p.id}" data-size="${item.size}" aria-label="${t("decrease")}">−</button><span>${item.qty}</span><button data-quantity="1" data-id="${p.id}" data-size="${item.size}" ${item.qty>=10?"disabled":""} aria-label="${t("increase")}">+</button></section><button class="remove-button" data-remove="${p.id}" data-size="${item.size}">${t("remove")}</button></section></section></article>`;}).join("")+`<section class="shipping-progress">${sum.subtotal>=300?t("shippingFree"):t("shippingRemaining")+" "+money(300-sum.subtotal)}<section class="progress-track"><span style="--progress:${Math.min(100,sum.subtotal/300*100)}%"></span></section></section><form id="coupon-form" class="coupon-form"><label class="visually-hidden" for="coupon">${t("coupon")}</label><input id="coupon" class="form-control" placeholder="${t("coupon")}" maxlength="20" value="${state.coupon?"LUBS10":""}"><button class="btn outline-button">${t("apply")}</button></form><p id="coupon-message" class="dialog-note" role="status">${t(state.coupon?"couponApplied":"couponHint")}</p>${totalsView(sum)}<button class="btn accent-button w-100" id="checkout-open">${t("checkout")}</button><p class="dialog-note text-center">${t("demoShort")}</p>`;
}
function totalsView(sum){return `<section class="totals"><p class="total-row"><span>${t("subtotal")}</span><span>${money(sum.subtotal)}</span></p>${sum.discount?`<p class="total-row discount-row"><span>${t("discount")}</span><span>− ${money(sum.discount)}</span></p>`:""}<p class="total-row"><span>${t("shipping")}</span><span>${sum.shipping?money(sum.shipping):t("free")}</span></p><p class="total-row grand"><span>${t("total")}</span><span>${money(sum.total)}</span></p></section>`;}
function checkoutView(){return heading("checkout")+`<p class="demo-banner">${t("checkoutDemo")}</p><form id="checkout-form" class="local-form"><label>${t("customerName")}<input class="form-control" name="name" required minlength="2" maxlength="60" autocomplete="off"></label><label>${t("phone")}<input class="form-control" name="phone" type="tel" required pattern="(?:05[0-9]{8}|\\+9665[0-9]{8}|9665[0-9]{8})" placeholder="05xxxxxxxx" title="${t("phoneHelp")}" dir="ltr" autocomplete="off"></label><label>${t("address")}<textarea class="form-control" name="address" required minlength="5" maxlength="250" placeholder="${t("addressPlaceholder")}" autocomplete="off"></textarea></label><p class="total-row grand"><span>${t("total")}</span><span>${money(totals().total)}</span></p><button class="btn brand-button">${t("confirmOrder")}</button></form>`;}
function successView(v){return `<section class="success">${icon("check")}<h2 id="dialog-title">${t("orderSuccess")}</h2><p>${t("total")}: ${money(v.total)}</p><p>${t("orderNote")}</p><span class="order-number" dir="ltr">${v.order}</span><button class="btn brand-button w-100" data-close>${t("continueShopping")}</button></section>`;}
function infoView(v){const kind=v.kind;return heading(kind==="sizes"?"guide":kind==="shipping"?"shippingPolicy":"about")+`<section class="info-copy">${kind==="sizes"?`<p>${t("guideText")}</p><table class="size-table"><thead><tr><th>${t("size")}</th><th>${t("chest")}</th><th>${t("waist")}</th></tr></thead><tbody>${[["S","88–94","72–78"],["M","95–101","79–85"],["L","102–108","86–92"],["XL","109–115","93–99"]].map(row=>`<tr>${row.map(cell=>`<td><bdi>${cell}</bdi></td>`).join("")}</tr>`).join("")}</tbody></table><button class="btn outline-button" data-product="${v.id}">${t("back")}</button>`:kind==="shipping"?`<p>${t("shippingText")}</p><p>${t("returnsText")}</p>`:`<p>${t("aboutText")}</p><p>${t("demoInfo")}</p>`}</section>`;}

// 4. Simple local accounts. Keep earlier accounts and hash passwords with PBKDF2.
function accounts(){const list=read("lubs-accounts-v1",[]);return Array.isArray(list)?list.filter(a=>a&&typeof a.email==="string"&&typeof a.name==="string"&&typeof a.salt==="string"&&typeof a.hash==="string"):[];}
function currentUser(){const session=read("lubs-session-v1",null);return accounts().find(a=>a.email===session?.email);}
async function passwordHash(password,salt){
  if(!crypto.subtle)throw Error(t("secureContext"));
  const key=await crypto.subtle.importKey("raw",new TextEncoder().encode(password),"PBKDF2",false,["deriveBits"]);
  const bits=await crypto.subtle.deriveBits({name:"PBKDF2",salt:new TextEncoder().encode(salt),iterations:100000,hash:"SHA-256"},key,256);
  return Array.from(new Uint8Array(bits),n=>n.toString(16).padStart(2,"0")).join("");
}
function accountView(mode="login"){
  const user=currentUser(),register=mode==="register";
  if(user)return heading("myAccount")+`<section class="account-profile"><strong>${esc(user.name)}</strong><p dir="ltr">${esc(user.email)}</p></section><p class="demo-banner">${t("accountDemo")}</p><button class="btn brand-button w-100" id="logout">${t("logout")}</button>`;
  return heading(register?"register":"welcome")+`<nav class="auth-tabs"><button class="btn ${register?"outline-button":"brand-button"}" data-auth="login">${t("login")}</button><button class="btn ${register?"brand-button":"outline-button"}" data-auth="register">${t("register")}</button></nav><p class="demo-banner">${t("accountDemo")}</p><form id="account-form" class="local-form" data-mode="${mode}">${register?`<label>${t("customerName")}<input class="form-control" name="name" required minlength="2" maxlength="60" autocomplete="name"></label>`:""}<label>${t("email")}<input class="form-control" name="email" type="email" required maxlength="120" placeholder="you@example.com" dir="ltr" autocomplete="email"></label><label>${t("password")}<input class="form-control" name="password" type="password" required minlength="6" maxlength="128" placeholder="${t("passwordHint")}" autocomplete="${register?"new-password":"current-password"}"></label>${register?`<label>${t("confirmPassword")}<input class="form-control" name="confirm" type="password" required minlength="6" maxlength="128" autocomplete="new-password"></label>`:""}<p id="auth-message" class="error-message" role="status"></p><button class="btn brand-button" type="submit">${t(register?"register":"login")}</button></form>`;
}
async function submitAccount(form){
  const fields=new FormData(form),email=String(fields.get("email")).trim().toLowerCase(),password=String(fields.get("password")),register=form.dataset.mode==="register",button=form.querySelector('[type="submit"]'),message=$("#auth-message");
  button.disabled=true;message.textContent=t("checking");
  try{
    const list=accounts();let user=list.find(a=>a.email===email);
    if(register){
      const name=String(fields.get("name")).trim();if(name.length<2)throw Error(t("nameError"));if(user)throw Error(t("duplicate"));if(password!==fields.get("confirm"))throw Error(t("mismatch"));
      const salt=Array.from(crypto.getRandomValues(new Uint8Array(16)),n=>n.toString(16).padStart(2,"0")).join("");
      user={name,email,salt,hash:await passwordHash(password,salt)};list.push(user);if(!write("lubs-accounts-v1",list))throw Error(t("storageBlocked"));
    }else if(!user||await passwordHash(password,user.salt)!==user.hash)throw Error(t("wrongLogin"));
    if(!write("lubs-session-v1",{email}))throw Error(t("storageBlocked"));syncHeader();if($("#dialog").open)openView("account");notify(t(register?"registered":"loggedIn"));
  }catch(error){if(message.isConnected)message.textContent=error.message;}finally{if(button.isConnected)button.disabled=false;}
}

// 5. Language, theme, REST API and event handlers share the same state.
function localize(){
  document.documentElement.lang=lang;document.documentElement.dir=lang==="ar"?"rtl":"ltr";document.documentElement.dataset.theme=theme;document.title=t("title");
  document.querySelector('meta[name="theme-color"]').content=theme==="dark"?"#11140f":"#d8fc71";
  document.querySelector('meta[name="description"]').content=t("heroDescription");
  document.querySelectorAll("[data-i18n]").forEach(el=>el.textContent=t(el.dataset.i18n));document.querySelectorAll("[data-placeholder]").forEach(el=>el.placeholder=t(el.dataset.placeholder));document.querySelectorAll("[data-alt]").forEach(el=>el.alt=t(el.dataset.alt));
  $(".main-nav").setAttribute("aria-label",t("navigation"));$(".header-tools").setAttribute("aria-label",t("controls"));$(".filters").setAttribute("aria-label",t("categories"));
  $("#language-toggle").textContent=lang==="ar"?"EN":"عربي";$("#language-toggle").setAttribute("aria-label",lang==="ar"?"Switch to English":"التبديل إلى العربية");
  $("#theme-toggle").innerHTML=icon(theme==="dark"?"sun":"moon");$("#theme-toggle").setAttribute("aria-pressed",String(theme==="dark"));$("#theme-toggle").setAttribute("aria-label",t(theme==="dark"?"light":"dark"));$("#theme-toggle").title=t(theme==="dark"?"light":"dark");$("#dialog-close").setAttribute("aria-label",t("close"));
  renderProducts();if($("#dialog").open)renderView();
}
async function loadProducts(){
  $("#api-refresh").disabled=true;apiMessage="loading";$("#api-status").textContent=t(apiMessage);const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),8000);
  try{
    const groups=await Promise.all(["mens-shirts","womens-dresses"].map(async category=>{const response=await fetch("https://dummyjson.com/products/category/"+category,{signal:controller.signal});if(!response.ok)throw Error();const data=await response.json();if(!Array.isArray(data.products))throw Error();return data.products;}));
    const incoming=groups.flat(),updates=products.filter(p=>p.apiId).map(p=>{const item=incoming.find(x=>x.id===p.apiId);if(!item||!Number.isFinite(item.price)||item.price<=0)throw Error();return {id:p.id,price:Math.round(item.price*3.75)};});
    updates.forEach(item=>Object.assign(product(item.id),{price:item.price,enabled:true}));write("lubs-api-products",updates);apiMessage="apiLoaded";
  }catch{apiMessage=products.some(p=>p.apiId&&p.enabled)?"apiCached":"apiFailed";}finally{clearTimeout(timer);$("#api-refresh").disabled=false;renderProducts();if(activeView?.type==="cart"&&$("#dialog").open)renderView();}
}
$("#language-toggle").onclick=()=>{lang=lang==="ar"?"en":"ar";write("lubs-prefs-v1",{lang,theme});localize();};
$("#theme-toggle").onclick=()=>{theme=theme==="dark"?"light":"dark";write("lubs-prefs-v1",{lang,theme});localize();};
$("#search").oninput=e=>{state.query=e.target.value.trim();renderProducts();};$("#sort").onchange=e=>{state.sort=e.target.value;renderProducts();};
$("#api-refresh").onclick=loadProducts;$("#reset-filters").onclick=resetFilters;
$(".main-nav").onclick=e=>{const link=e.target.closest("[data-nav]");if(link){state.filter=link.dataset.nav;state.favoritesOnly=false;state.query="";$("#search").value="";renderProducts();}};
$("#account-open").onclick=()=>openView("account",{mode:"login"});$("#cart-open").onclick=()=>openView("cart");
$("#favorites-open").onclick=()=>{state.favoritesOnly=!state.favoritesOnly;state.filter="all";state.query="";$("#search").value="";renderProducts();$("#collection").scrollIntoView({behavior:"smooth"});};
$("#dialog-close").onclick=()=>$("#dialog").close();$("#dialog").onclose=()=>{activeView=null;};
document.addEventListener("click",e=>{
  const b=e.target.closest("button");if(!b)return;
  if(b.hasAttribute("data-close"))$("#dialog").close();
  if(b.dataset.filter){state.filter=b.dataset.filter;state.favoritesOnly=false;renderProducts();}
  if(b.dataset.product)openView("product",{id:Number(b.dataset.product)});
  if(b.dataset.favorite){const id=Number(b.dataset.favorite),index=state.favorites.indexOf(id);if(index<0)state.favorites.push(id);else state.favorites.splice(index,1);notify(t(persist()?index<0?"saved":"removedFavorite":"storageBlocked"));renderProducts();}
  if(b.dataset.quantity){const item=state.cart.find(x=>x.id===Number(b.dataset.id)&&x.size===b.dataset.size);if(item){item.qty=Math.min(10,item.qty+Number(b.dataset.quantity));state.cart=state.cart.filter(x=>x.qty>0);persist();syncHeader();renderView();}}
  if(b.dataset.remove){state.cart=state.cart.filter(x=>!(x.id===Number(b.dataset.remove)&&x.size===b.dataset.size));persist();syncHeader();renderView();}
  if(b.dataset.auth)openView("account",{mode:b.dataset.auth});
  if(b.dataset.info)openView("info",{kind:b.dataset.info});
  if(b.dataset.guide)openView("info",{kind:"sizes",id:Number(b.dataset.guide)});
  if(b.id==="checkout-open"&&state.cart.length)openView("checkout");
  if(b.id==="logout"){try{localStorage.removeItem("lubs-session-v1");syncHeader();openView("account",{mode:"login"});notify(t("loggedOut"));}catch{notify(t("storageBlocked"));}}
});
document.addEventListener("submit",e=>{
  const form=e.target;e.preventDefault();
  if(form.id==="product-form"&&addProduct(Number(form.dataset.id),new FormData(form).get("size")))$("#dialog").close();
  if(form.id==="coupon-form"){if($("#coupon").value.trim().toUpperCase()==="LUBS10"){state.coupon=true;renderView();}else $("#coupon-message").textContent=t("invalidCoupon");}
  if(form.id==="account-form")submitAccount(form);
  if(form.id==="checkout-form"&&state.cart.length){const total=totals().total,order="LUBS-"+Date.now().toString(36).toUpperCase();state.cart=[];state.coupon=false;persist();syncHeader();openView("success",{order,total});}
});
$("#dialog").addEventListener("click",e=>{if(e.target===$("#dialog")){const r=e.target.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)e.target.close();}});
localize();loadProducts();

// Optional structured browser tool: it stages a cart item, never places an order.
if(document.modelContext?.registerTool){
  const lifecycle=new AbortController();
  const tool={name:"add_product_to_cart",description:"Add one product and size to the local cart. Does not place an order.",inputSchema:{type:"object",properties:{productId:{type:"integer"},size:{type:"string"}},required:["productId","size"],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},execute(input){if(!input||!Number.isInteger(input.productId)||typeof input.size!=="string")throw Error("Invalid input");const added=addProduct(input.productId,input.size);if(activeView?.type==="cart")renderView();return {added,cartCount:state.cart.reduce((s,x)=>s+x.qty,0),total:totals().total,currency:"SAR"};}};
  try{Promise.resolve(document.modelContext.registerTool(tool,{signal:lifecycle.signal})).catch(()=>{});}catch{}
  window.addEventListener("pagehide",()=>lifecycle.abort(),{once:true});
}
