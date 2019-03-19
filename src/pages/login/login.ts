import { Component } from '@angular/core';
import { NavController, AlertController, Platform } from 'ionic-angular';
import { ProviderJsonProvider } from '../../providers/provider-json/provider-json';
import { TestServiceProvider } from '../../providers/test-service/test-service';
import { CustomersPage } from '../customers/customers';
import { Storage } from '@ionic/storage';
 
//import { PickerPage } from '../../pages/picker/picker';
 
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  username: string;
  password: string;
 
  constructor(public navCtrl: NavController, 
              public alertCtrl: AlertController, 
              public provider: ProviderJsonProvider,
              private platform: Platform,
              private storage: Storage) 
  {     
    storage.get('contract').then((val) => {
      console.log('contract', val);
      if(val != 'true'){        
        this.showTermsAndConditions();
      }
    });           
  }  

  loadCustomer()
  {
  	this.provider.getInfoCustomer(this.username, this.password)
  	.subscribe(
      (data) => {
        this.login(data);
      },

      (err)=> {
        this.login(null);
      }
    );
      
  }
 
  login(data_customer) 
  {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'El usuario o la contraseña ingresados son incorrectos.',
      buttons: ['OK']
    });
 
    if (data_customer != null && data_customer.idCustomer > 0) {
      this.navCtrl.push(CustomersPage, {info_data: data_customer, username: this.username, password: this.password});
    } else {
      alert.present();
    }
    this.username = '';
    this.password = '';
  }

  ionViewCanEnter ()
  {
    this.platform.ready().then( ()=> {
      this.platform.registerBackButtonAction( ()=> {
        this.backButtonControl();
      })
    });​        
  }

  backButtonControl()
  {
    this.platform.exitApp();
  }

  showTermsAndConditions()
  {
    let alert = this.alertCtrl.create({
  
      title: 'Terminos y condiciones',
      subTitle: 'A continuación se describen los terminos y condiciones para esta app',
      message: "<strong>TERMINOS Y CONDICIONES DE USO PAYVIEW</strong>"
      
      +"<p>Le solicitamos leer detenidamente los presentes Términos y Condiciones de Uso en adelante “Términos y Condiciones”, antes de realizar cualquier consulta o diligenciamiento de información a través de nuestra plataforma, teniendo en cuenta que contienen información relevante acerca de sus derechos, deberes y obligaciones, de manera que si usted no está de acuerdo en dar cumplimiento a los presentes “Términos y Condiciones” lo mejor es abstenerse de utilizar “PAYVIEW”, de lo contrario al crear un perfil, ingresar información o realizar alguna consulta, estará aceptando el contenido de los presentes “Términos y Condiciones” por tratarse de un contrato de adhesión, por lo tanto no podrá presentar reclamaciones posteriores, con fundamento en el contenido de los mismos y mucho menos alegar el desconocimiento de su contenido después de utilizar la plataforma en contravía de lo establecido en el presente documento, así mismo nos reservamos el derecho de actualizar o cambiar los “Términos y Condiciones” en cualquier momento con previa publicación de sus actualizaciones, por esta razón recomendamos leer esta sección cada vez que vaya a usar este sitio."
      
      +"<strong>A. GLOSARIO"+
      
      " TRY AGAIN CORPORATION:</strong> Sociedad Panameña, inscrita debidamente en el registro público mercantil bajo folio No. 155635127, es la titular de los derechos de la plataforma, en adelante TRY AGAIN."
      
      +"<strong>PAYVIEW:</strong> Plataforma creada con el objetivo de lograr que los usuarios finales de compras de bienes y servicios financiados, puedan consultar el progreso de sus compras y pagos, conocer la cantidad de compras realizadas y las fechas de vencimiento de sus obligaciones. Esta plataforma podrá conectarse a diversas plataformas para monitorear diferentes tipos de obligaciones y concentrar la información en una sola plataforma. En adelante PAY VIEW o PLATAFORMA."
      
      +"<strong>USUARIO:</strong> Consumidor final de la plataforma, quien podrá visualizar en PAYVIEW, el estado de pago de las compras que desee agregar a su cuenta personal y que estén disponibles en plataformas que permitan conectarse para concentrar la información. Es el titular de la información personal suministrada en la plataforma."
      
      +"<strong>INFORMACION PERSONAL:</strong> se considera información personal toda aquella relacionada con el USUARIO, ya sea diligenciada por el mismo usuario o por terceras empresas que reporten las compras y pagos hechas por los usuarios. Se considera información personal todos los datos de identificación, de contacto, de profesión, de compras, de pagos y toda demás información que sea asociada a una persona y que sea incorporada a la plataforma, sin consideración de si es incorporada por el titular de la información o por las empresas o terceros que realizan las ventas o reciben los pagos."
      
      +"<strong>B. ACEPTACIÓN DE TERMINOS Y CONDICIONES</strong>"
      
      +"El usuario o cliente que ingrese a PAYVIEW lo hará bajo su propia iniciativa y responsabilidad, por lo tanto acepta que las compras que realice y se registren en la plataforma están sujetas a los “Términos y Condiciones” publicados en este sitio y todas las operaciones y contenidos se regularan de conformidad a"
      
      +"las leyes territoriales aplicables, por lo tanto al ingresar a “PAY VIEW” el usuario admite haber leído y entendido los “Términos y Condiciones” y por consiguiente asume la obligación de respetar todo el contenido que se exprese en los mismos."
      
      +"<strong>C. RESTRICCIÓN DE USO DE PROPIEDAD INTELECTUAL</strong>"
      
      +"Todo el material informático, publicitario, de multimedia, audiovisual, diseño del sitio web, diseño gráfico, logos, textos, ilustraciones, imágenes, fotografías y todos los contenidos de propiedad intelectual, incluyendo el signo distintivo PAY VIEW son propiedad exclusiva de TRY AGAIN CORPORATION, titular de los derechos derivados de la plataforma, toda vez que el contenido de la “PAY VIEW” tiene como propósito el uso personal, no comercial por parte de los usuarios de la misma, por esta razón el usuario podrá descargar el contenido única y exclusivamente previamente autorizado siempre y cuando cumpla con las siguientes condiciones:"
      
      +"* Que el uso sea personal, sin ningún propósito comercial."
      
      +"* No copiar ni reproducir el contenido en ningún medio."
      
      +"* No alterar o modificar en ninguna manera el contenido."
      
      +"Por lo tanto queda prohibido todo acto de copia, reproducción, modificación, creación de trabajos derivados, venta o distribución, exhibición de los contenidos, de ninguna manera o por ningún medio, incluyendo, mas no limitado a, medios electrónicos, mecánicos, de fotocopiado, de grabación o de cualquier otra índole, sin el permiso previo por escrito del titular de la plataforma. En ningún caso los presentes términos y condiciones confieren derechos, licencias y/o autorizaciones para realizar los actos anteriormente descritos. Cualquier uso no autorizado de los contenidos constituirá una violación a los presentes términos y condiciones y a las normas vigentes sobre marcas, derechos de autor y/u otras normas de propiedad intelectual tanto nacionales e internacionales aplicables y dará lugar a las acciones civiles y penales correspondientes."
      
      +"<strong>D. CAPACIDAD LEGAL DEL USUARIO</strong>"
      
      +"Al momento de realizar el registro en la plataforma, el USUARIO manifiesta tener capacidad legal para contratar según lo dispuesto por la ley, toda vez que debe tener el consentimiento y facultad legal para realizar compras en diferentes establecimientos o personas y efectuar la respectiva transacción o pago, por lo tanto el presente sitio on-line no se hace responsable por registros realizados por menores de edad y personas que no cuenten con las facultades mentales necesarias para celebrar un contrato, toda vez que deben estar supervisados por un adulto responsable para realizar este tipo de operaciones."
      
      +"E. POLÍTICA DE CONTENIDO DEL USUARIO"
      
      +"Le prohíbe al usuario transmitir o enviar desde la tienda en línea cualquier material ilegal, amenazador, calumniador, difamatorio, obsceno, escandaloso, pornográfico y/o cualquier otro material que pudiera dar lugar a cualquier"
      
      +"responsabilidad civil o penal en los términos expuestos por la Ley. Así mismo, el Usuario acepta no utilizar ningún dispositivo, software malicioso entre otros para obstruir el funcionamiento correcto de la plataforma y de sus contenidos y de las actividades realizadas en la misma."
      
      +"<strong>F. CREACION DE CUENTA DE USUARIO</strong>"
      
      +"Para realizar la compra el usuario deberá ingresar su información con el objetivo de crear una cuenta por medio de la cual se registrarán los datos asociados a sus compras y pagos, así como toda su información personal; la información personal que el usuario plasme debe ser correcta y veraz, por lo tanto, la “PAY VIEW” se reserva la facultad de verificar los datos enunciados por el usuario al momento de la creación de la cuenta."
      
      +"G. RECOLECCION Y VISUALIZACIÓN DE INFORMACION"
      
      +"La plataforma ofrece diferentes formularios, portales o secciones a través de las cuales se podrá visualizar información de las compras y pagos hechas por el USUARIO, datos que serán reportados tanto por los comercios en los cuales el USUARIO realice compras y que se encuentren conectados con PAY VIEW, así como por el mismo usuario, a través de los campos habilitados para el ingreso de información y de las eventuales preguntas o cuestionarios que realice la plataforma por mera liberalidad y para conocimiento del cliente o usuario. Es responsabilidad del USUARIO reportar a la plataforma cualquier tipo de inconformidad o error en la información reportada y/o visualizada. PAY VIEW ni TRY AGAIN CORPORATION se hacen responsables de los errores o inexactitudes de la información incorporada en la plataforma, sea cual sea su origen o proveniencia, pues PAY VIEW únicamente presta el servicio de recolección, visualización o centralización de información de los usuarios en relación con sus compras, pagos, hábitos de consumo y demás información personal."
      
      +"“PAY VIEW” se encarga de la actualización y buen funcionamiento de la plataforma y del soporte técnico, sin embargo no tiene la facultad de modificar, adicionar o eliminar datos y por tanto no contrae ninguna responsabilidad frente al usuario. Los precios o montos de las compras, los artículos comprados y los demás datos suministrados por los comercios son responsabilidad de los comercios y por tanto, la PLATAFORMA queda exonerada de cualquier responsabilidad por la información reportada."
      
      +"<strong>H. INFORMACION PARA PAGO</strong>"
      
      +" La plataforma podrá poner a disposición de los usuarios, previo convenio con los comercios, diferentes alternativas para el pago de los productos o servicios reportados como compras en la plataforma, en este caso, PAY VIEW pondrá a disposición de los usuarios un enlace que comunica con las respectivas plataformas de pago a través de tarjetas de crédito de las diferentes franquicias o pasarelas de pago autorizadas. En tales casos el manejo de la información personal será de responsabilidad exclusiva de la pasarela de pagos. Los clientes"
      
      +" deberán aceptar los Términos y Condiciones de Uso de la plataforma del medio de pago seleccionado antes de realizar sus transacciones."
      
      +"<strong>I. CUPÓN DE DESCUENTO</strong>"
      
      +"El operador de la tienda on-line podrá poner a disposición de los usuarios según políticas y promociones propias, cupones de descuento para ser efectivos en las compras que realicen los usuarios en comercios aliados. El usuario que tenga un cupón de descuento deberá registrar el código del cupón y aplicarlo antes de proceder con el pago para que de esta manera se haga efectivo y se descuente del valor de la compra. El cupón podrá ser usado como parte de pago de una compra y deben ser usado en una sola transacción teniendo en cuenta la vigencia del mismo y las condiciones en las que fue otorgado; los cupones de descuento no se rembolsaran en caso de pérdida o robo."
      
      +"<strong>J. AUTORIZACIÓN PARA CONSULTA DE INFORMACIÓN:</strong>"
      
      +"El Usuario actuando en nombre propio, autoriza a “PAY VIEW” y/o a quien este designe de manera irrevocable, escrita, expresa, concreta, suficiente, voluntaria e informada, para consultar toda la información personal, actual y la que se genere en el futuro de las relaciones comerciales y/o establecidas con referente a su comportamiento financiero, crediticio, origen de fondos, comercial y de servicios que exista o pueda existir en base de datos, centrales de riesgo, centrales de información, nacionales o extranjeras especialmente aquella referida al nacimiento, ejecución extinción de obligaciones que directa o indirectamente tengan carácter de dinerarias, independientemente de la naturaleza del contrato que les de origen, sea administrada, capturada, procesada, operada, verificada, reportada a centrales de riesgo, transmitida, transferida, usada o puesta en circulación y consultada Bajo la gravedad de juramento certifico que los datos personales por mi suministrados son veraces, completos, exactos, actualizados y comprobables."
      
      +"<strong>POLÍTICA DE TRATAMIENTO, USO Y EXPLOTACION DE INFORMACION PERSONAL</strong>"
      
      +"TRY AGAIN CORPORATION pone a conocimiento de los Titulares de los Datos Personales que sean tratados de cualquier manera en la plataforma PLAY VIEW, la presente Política de Tratamiento de Información Personal. El propósito principal de esta Política es poner en conocimiento de los Titulares de la Información los derechos que les asisten, los procedimientos y mecanismos dispuestos para hacer efectivos esos derechos, y darles a conocer el alcance y la finalidad del Tratamiento al cual serán sometidos los datos de información personal en caso de que el Titular otorgue su autorización expresa, previa e informada. TRY AGAIN CORPORATION así también ratifica su compromiso con los diversos grupos de interés con los que se relaciona; y con el manifiesto interés de respetar todos los derechos de los mismos, especialmente con este instrumento su derecho a la intimidad y otros conexos."
      
      +"<strong>K. DEFINICIONES.</strong>"
      
      +"Las presentes definiciones se relacionan con el significado que se les debe dar a los términos dentro del presente documento."
      
      +"a) Autorización: Es el consentimiento previo, expreso e informado del Titular para llevar a cabo el Tratamiento de su información personal."
      
      +"b) Base de Datos: Es el conjunto de datos de información personal que son objeto de Tratamiento sin importar la modalidad del mismo."
      
      +"c) Dato Financiero: Es toda información Personal referido al nacimiento, ejecución y extinción de obligaciones dinerarias, independientemente de la naturaleza del contrato que les dé origen."
      
      +"d) Dato Personal: Es cualquier información relacionada o relacionable a una persona natural."
      
      +"e) Dato Público: Es aquel que la ley denomina como tal, o el que reposa en registros, certificados, documentos o Bases de Datos con carácter público."
      
      +"f) Dato Sensible: Es la información personal relacionada con la intimidad del Titular o que puede dar lugar a discriminaciones o tratos diferenciados. También forman parte de esta categoría los datos biométricos."
      
      +"g) Autorizado: Es la persona y sus dependientes que por virtud de la Autorización y de estas Políticas tienen legitimidad para Tratar la información personal del Titular. El Autorizado incluye al género de los Habilitados."
      
      +"h) Habilitación: Es la legitimación que expresamente y por escrito mediante contrato o documento que haga sus veces, otorgue TRY AGAIN a terceros, en cumplimiento de la Ley aplicable, para el Tratamiento de Información Personal, convirtiendo a tales terceros en Encargados del Tratamiento de los Información Personal entregada o puesta a disposición."
      
      +"i) Responsable de Tratamiento: Es la persona, autorizada por el Titular, que administra y toma decisiones respecto de la Base de Datos."
      
      +"j) Titular: Es la persona natural a quien se refieren los datos que reposan en la Base de Datos."
      
      +"k) Transferencia: Es la comunicación de los datos personales entre el Encargado y el Responsable del tratamiento."
      
      +"l) Transmisión: Es la actividad de Tratamiento de Datos Personales mediante la cual se comunican los mismos, internamente o con terceras personas, dentro o fuera del respectivo país, cuando dicha comunicación tenga por objeto la realización de cualquier actividad de Tratamiento de Información Personal."
      
      +"m) Tratamiento de Información Personal: Es toda acción encaminada al procesamiento de Bases de Datos, así como también su transferencia a terceros."
      
      +"<strong>L. AMBITO DE APLICACIÓN</strong>"
      
      +"La presente política, en el cual se establecen la Política de Tratamiento de las Bases de Datos Personales, el Ámbito de aplicación albergará, Datos personales, archivos, e Información registrados en las Bases de Datos de TRY AGAIN CORPORATION, susceptibles de tratamiento, en virtud de las relaciones contractuales o de servicios que se tengan o se hayan tenido entre ambas partes, con los fines que se establecerán a continuación."
      
      +"M. FINALIDAD DE LA INFORMACIÓN PERSONAL RECOPILADA EN LAS BASES DE DATOS"
      
      +"La información personal recolectada, se usará para los siguientes fines:"
      
      +"1. Generar y administrar toda la información necesaria para el cumplimiento de las obligaciones tributarias, comerciales, civiles, laborales, contractuales y en general toda la obligación que ataña la empresa."
      
      +"2. Administrar la empresa respecto de sus usuarios, clientes, proveedores y otros grupos de interés."
      
      +"3. Solicitar y recolectar información personal y aquella relacionada con datos financieros, con fines comerciales de las compras realizadas en los comercios conectados con PAY VIEW."
      
      +"4. Remisión de información, requerimientos y notificaciones a todos los empleados, proveedores, clientes, posibles clientes, aliados comerciales y demás grupos de interés de TRY AGAIN CORPORATION, que se encuentran registrados en nuestras bases de datos."
      
      +"5. Realizar programas de fidelización y gestión de servicio al cliente."
      
      +"6. Realización de llamadas (call center) con fines administrativos, comerciales y publicitarios."
      
      +"7. Remitir comunicaciones de mercadeo, realizar campañas publicitarias a través de redes sociales o mediante envío directo de información por medio electrónico o físico."
      
      +"8. Envío de correo electrónico y demás mensajes de datos, informando sobre los eventos, actividades comerciales y en general publicidad sobre TRY AGAIN CORPORATION o sus aliados comerciales."
      
      +"9. Comunicación de ofertas, incentivos y promociones relacionados con TRY AGAIN CORPORATION o sus aliados comerciales."
      
      +"10. Envió de información sobre productos y servicios."
      
      +"11. Envío de felicitaciones y congratulaciones por fechas especiales."
      
      +"12. Comunicación sobre la existencia de sorteos, rifas, concursos, beneficios, promociones o invitaciones, actividades lúdicas o de entretenimiento que se realicen por parte de TRY AGAIN, sus aliados comerciales tanto de forma física o en sus dominios virtuales en la WEB."
      
      +"13. Enviar encuestas de opinión sobre la satisfacción de clientes y potenciales clientes."
      
      +"14. Análisis y segmentación de la información para elaborar estudios y estadísticas sobre preferencias de consumo."
      
      +"15. Realizar encuestas y/o sondeos de opinión sobre productos y servicios."
      
      +"16. Transmitir o transferir información personal relacionada con su actividad en PAY VIEW, a diferentes comercios con el fin de ser analizados para investigaciones de mercado, siempre y cuando el receptor de la información garantice los mismos derechos contemplados en la presente política."
      
      +"17. Ejecutar debidamente actividades tributarias y contables."
      
      +"18. Conservar el archivo físico y/o digital por el tiempo legalmente requerido de forma que puedan ser consultados posteriormente por el titular o una autoridad competente."
      
      +"19. Dar cumplimiento a exigencias legales y requerimientos de autoridades judiciales."
      
      +"20. Atender solicitudes de información que formulen los clientes y/o personas interesadas y brindar orientación para el acceso a servicios ofertados."
      
      +"<strong>N. DATOS DE NAVEGACIÓN:</strong>"
      
      +"El sistema de navegación y el software necesario para el funcionamiento de la página web recogen algunos datos personales, cuya transmisión se haya implícita en el uso los protocolos de comunicación de Internet."
      
      +"Por su propia naturaleza, la información recogida podría permitir la identificación de usuarios a través de su asociación con datos de terceros aunque no se obtenga para ese fin. En esta categoría de datos se encuentran, la dirección IP o el nombre de dominio del equipo utilizado por el usuario para acceder a la"
      
      +"página web, la dirección URL, la fecha y hora y otros parámetros relativos al sistema operativo del usuario."
      
      +"Estos datos de utilizan con la finalidad exclusiva de obtener información estadística anónima sobre el uso de la página web o controlar su correcto funcionamiento técnico, y se cancelan inmediatamente después de ser verificados."
      
      +"<strong>O. TRATAMIENTO AL CUAL SERÁN SOMETIDOS LOS DATOS:</strong>"
      
      +"Los datos y autorizaciones de tratamiento se recolectarán por medios físicos (suministro de la información por parte de los titulares, de manera telefónica, por escrito, o verbalmente en las oficinas) o electrónicos (a través de la página web de TRY AGAIN CORPORATION o cualquiera de sus productos o servicios o la página web del encargado del manejo de los datos, así como mediante el uso del correo electrónico de los titulares de tales datos)."
      
      +"Los datos recaudados y las autorizaciones serán almacenados en las bases de datos de TRY AGAIN CORPORATION y permanecerán bajo su custodia en condiciones de idoneidad, confidencialidad y seguridad generalmente admitidas. Sólo el personal autorizado podrá acceder a estas bases de datos. Se observarán los protocolos de acceso y seguridad que se consideran estándar en estas actividades para evitar la vulneración o manipulación de la información recopilada."
      
      +"No obstante lo anterior, TRY AGAIN CORPORATION podrá operar las bases de datos mediante un encargado del tratamiento de datos, en cuyo caso, hará saber a los titulares de la información que estas políticas se extenderán y, por ello, serán aplicables a tal encargado, de forma que el titular pueda ejercer los derechos que le confiere la ley, tanto frente a TRY AGAIN CORPORATION como frente al encargado designado por ésta. La información recopilada se usará en la forma descrita en la presente política."
      
      +"Con la información personal suministrada, TRY AGAIN CORPORATION podrá realizar operaciones tales como la recolección, almacenamiento, uso, circulación, trasmisión, transferencia o supresión."
      
      +"<strong>P. DERECHOS QUE LE ASISTEN AL TITULAR DE LA INFORMACIÓN</strong>"
      
      +"1. Acceder de manera gratuita a su información personal, así como conocerlos, rectificarlos, corregirlos y actualizarlos, este Derecho se podrá ejercer, frente a datos parciales, inexactos, incompletos, fraccionaos que induzcan a error, siguiendo los procedimientos establecidos más adelante."
      
      +"2. Solicitar y obtener prueba de la autorización concedida para el tratamiento de sus datos personales, excepto en el caso en que ella se presuma por haberse usado mecanismos alternos de comunicación."
      
      +"3. Obtener información sobre el uso que se ha dado a su información personal."
      
      +"4. Acudir ante las autoridades, con el fin de solicitar y exigir el amparo de los derechos que le confieren las leyes."
      
      +"5. Revocar, en cualquier momento, la autorización para el tratamiento de sus datos personales, modificarla o condicionarla. Así mismo, solicitar la supresión del dato, su modificación o aclaración, salvo que sea necesaria la información por razones legales o contractuales tanto con TRY AGAIN CORPORATION como con los comercios aliados."
      
      +"6. Cuando se recolecte información sensible, el titular tiene la facultad de abstenerse de otorgarlos."
      
      +"<strong>Q. PROCEDIMIENTOS PARA QUE LOS TITULARES DE LA INFORMACIÓN PUEDAN EJERCER SUS DERECHOS.</strong>"
      
      +"Con el fin salvaguardar los derechos de los titulares de la información que reposa en nuestras bases de datos, y la que se recopile en adelante, TRY AGAIN CORPORATION establece los siguientes procedimientos:"
      
      +"1. El titular de la información (entendiéndose por él también a sus causahabientes y apoderados) podrá solicitar en cualquier tiempo de forma electrónica, información (consultas) sobre los datos personales que registran las bases de datos de TRY AGAIN CORPORATION y sobre las autorizaciones concedidas."
      
      +"2. Así mismo, podrá elevar peticiones o reclamaciones sobre aclaración, corrección, modificación, rectificación o supresión de datos; revocación o condicionamiento de autorizaciones para el tratamiento, acompañando los documentos o pruebas que pretenda hacer valer."
      
      +"3. Para ejercer las prerrogativas a que se refieren los numerales anteriores, el titular deberá radicar petición escrita, dirigida al AREA DE SERVICIO AL CLIENTE, identificándose plenamente, a fin de que TRY AGAIN CORPORATION pueda corroborar que el peticionario es el titular de la información. En la solicitud se debe precisar: a) Nombre completo y correcto del titular y/o su apoderado, si es el caso. b) Identificación del titular y de su representante, en el evento en que actúe a través de apoderado. c) Dato o autorización que se quiere conocer, corregir, modificar, suprimir o revocar, con indicación clara y detallada de la forma en que se pide hacer la corrección o modificación. d) Domicilio o medio donde recibirán respuesta."
      
      +"4. La respuesta a las consultas a que se refiere el numeral 1º, será enviada por TRY AGAIN CORPORATION en un término máximo de acuerdo con los plazos que para el efecto establezca la ley territorial que en ningún caso podrá ser superior diez días (10) días hábiles contados a partir de la fecha de recibo de la misma. Cuando no fuere posible atender la consulta dentro de dicho término, se informará al interesado, expresando los motivos de la demora y señalando la fecha en que se atenderá su consulta, la cual en ningún caso podrá superar los cinco (5) días hábiles siguientes al vencimiento del primer término."
      
      +"5. La respuesta a las reclamaciones a que se refiere el numeral 2º, se dará por TRY AGAIN CORPORATION en un término máximo de quince (15) días hábiles contados a partir del día siguiente a la fecha de su recibo. Cuando no fuere posible atender el reclamo dentro de dicho término, se informará al interesado los motivos de la demora y la fecha en que se atenderá su reclamo, la cual en ningún caso podrá superar los ocho (8) días hábiles siguientes al vencimiento del primer término."
      
      +"La información que sea suministrada por los Titulares, será utilizada únicamente para los fines establecidos en la presente Política, salvaguardando la misma con condiciones de seguridad en pro de impedir que sea utilizada con fines fraudulentos, o que vayan en contra los postulados constitucionales y legales establecidos."
      
      +"<strong>R. MODIFICACIONES DE LAS POLÍTICAS DE PRIVACIDAD</strong>"
      
      +"TRY AGAIN CORPORATION se encuentra plenamente facultado para modificar la presente Política de Tratamiento en cualquier momento. Dichas modificaciones serán publicadas y anunciados en forma oportuna a través de las páginas web o aplicaciones digitales y plataformas."
      
      +"El uso continuo de los servicios o no desvinculación de los mismos por el titular del dato después de la notificación de los cambios realizados, es decir los nuevos lineamientos establecidos constituyen la aceptación de la misma."
      
      +"<strong>S. FECHA DE ENTRADA EN VIGENCIA DE LA POLÍTICA DE TRATAMIENTO DE INFORMACIÓN PERSONAL Y TERMINOS Y CONDICIONES DE USO DE LA PLATAFORMA</strong>"
      
      +"La política de tratamiento de información personal a que se refiere este documento, así como los términos y condiciones de uso de la plataforma PAY VIEW estará vigente a partir del primero (1) del mes de marzo del año 2019, pero podrá ser modificada, en cuyo caso se comunicará lo pertinente a los titulares.",
      buttons: [
            {
              text: 'Cancelar',
              handler: () => {
                this.storage.set('contract', 'false'); 
                console.log('Disagree clicked');
                this.backButtonControl();
              }
            },
            {
              text: 'Aceptar',
              handler: () => {   
                this.storage.set('contract', 'true');             
                console.log('Agree clicked');
              }
            }
          ]
      });
                    
    alert.present();
  }
 
}