import nodemailer from 'nodemailer';

export const handler = async (event) => {
	try {
		// Parse the request body
		const { email, campaignId } = JSON.parse(event.body);

		if (!email) {
			return {
				statusCode: 400,
				body: JSON.stringify({ success: false, message: 'Email is required.' }),
			};
		}

		// Configure Nodemailer transporter
		const transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			port: process.env.SMTP_PORT,
			secure: process.env.SMTP_PORT === '465', // Use SSL for port 465
			auth: {
				user: process.env.SMTP_USERNAME,
				pass: process.env.SMTP_PASSWORD,
			},
			tls: {
				rejectUnauthorized: false, // Allow self-signed certificates (if applicable)
			},
		});

		// Define email content based on campaignId
		let htmlContent;

		if (campaignId === 'Dale') {
			htmlContent = `
				<!DOCTYPE html>
				<html xmlns="http://www.w3.org/1999/xhtml">
				<head>
				<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name=”x-apple-disable-message-reformatting”>
				<title></title><!-- LEAVE EMPTY -->

				<!--[if mso]>
				<style type="text/css">
					table {border-collapse:collapse;border-spacing:0;margin:0;}
					div, td {padding:0;}
					div {margin:0 !important;}
				</style>
				<noscript>
					<xml>
						<o:OfficeDocumentSettings>
							<o:PixelsPerInch>96</o:PixelsPerInch>
						</o:OfficeDocumentSettings>
					</xml>
				</noscript>
				<![endif]-->

				<style type="text/css">
					 img {
							border: 0;
							outline: none;
							text-decoration: none !important;
							-ms-interpolation-mode: bicubic;
					 }
					 a img {  border: none;  }
					 table {
							border-spacing: 0;
							border-collapse: collapse !important;
					 }
					 td {
							border-collapse: collapse !important;
							vertical-align:top;
					 }
					 table, tr, td {
							padding: 0;
							border: none;
							border-spacing: 0px;
							border-collapse: collapse;
							text-wrap: pretty;
					 }
					 div[style="margin: 16px 0;"] { margin: 0 !important; text-wrap: pretty;}
					 p {text-wrap: pretty;}
					 body {
						 font-family: 'Arial', Helvetica, Arial, sans-serif;
						 font-size:100% !important;
						 font-weight:200;
						 color:#1e243e;     
						 width: 100% !important;
						 min-width: 100%;
						 height: 100% !important;
						 margin: 0 auto !important;
						 Margin: 0 !important;
						 padding: 0 !important;
						 -webkit-text-size-adjust: 100%;
						 -ms-text-size-adjust: 100%;
						 word-spacing:normal;
					 }
					 html {min-height: 100%;}
					 table, td {
							mso-table-lspace: 0pt;
							mso-table-rspace: 0pt;
					 }
					 h1 {
						font-family: "trajan-pro-3", Times, serif !important;
						 font-weight:400 !important;
						 letter-spacing:0;    
						 color:#aa8c52;
						 font-size:36px;
						 line-height:36px;
						 letter-spacing: 0;    
						 text-align:center;    
					 } 

					 h2 {
						font-family: "trajan-pro-3", Times, serif !important;
						 font-weight:400 !important;
						 letter-spacing:0;    
						 color:#aa8c52;
						 font-size:36px;
						 line-height:36px;
						 letter-spacing: 0;    
						 text-align:center;    
					 } 

					 h3 {     
						 font-family: 'Arial', Helvetica, Arial, sans-serif;     
						 font-weight:400 !important;
						 letter-spacing:0;    
						 color:#1e243e;
						 font-size:20px;
						 line-height:24px;     
						 text-align:center;
						 font-weight:bold;
					 }

					 p {
						font-size:18px;
					 }  

					 a { text-decoration:none !important; }
					 #outlook a {padding: 0; }
					 .appleLinks a {
							color:#aa8c52 !important;
							text-decoration: none;}
					 .appleLinksWhite a {
							color: #ffffff !important;
							text-decoration: none;}
					 .appleLinksBlack a {
							color: #1e243e !important;
							text-decoration: none;}

					 u + #body a,
					 a[x-apple-data-detectors] {
							color: inherit !important;
							text-decoration: none !important;
							font-size: inherit !important;
							font-family: inherit !important;
							font-weight: inherit !important;
							line-height: inherit !important;
					 }

					 .col-5 { max-width: 5% !important;height:0 }
					 .col-90 { max-width: 90% !important; }

					 .col-10 { max-width: 10% !important;height:0 }
					 .col-80 { max-width: 80% !important; }

					 .col-15 { max-width: 15% !important;height:0 }
					 .col-70 { max-width: 70% !important; }

					 .col-20 { max-width: 20% !important;height:0 }
					 .col-60 { max-width: 60% !important; }

					 .col-25 { max-width: 25% !important;height:0 }
					 .col-50 { max-width: 50% !important; }

					 .col-30 { max-width: 30% !important; }
					 .col-33 { max-width: 33.3% !important; }
					 .col-40 { max-width: 40% !important; }
					 .col-50 { max-width: 50% !important; }
					 .col-60 { max-width: 60% !important; }
					 .col-70 { max-width: 70% !important; }
   
					 @media screen and (max-width: 600px) {
						.features {
							width:50%;
						}
					 }   

					 .hide {display: inline-block;}
					 .show {display: none}
   
   
					 @media screen and (max-width: 500px) {
						 .col-5,
						 .col-10,
						 .col-15,
						 .col-20,
						 .col-25,
						 .col-60,
						 .col-70,
						 .col-80,
						 .col-90 { max-width: 100% !important; }

						.col-30 { max-width: 100% !important; display: block !important; }
						.col-33 { max-width: 100% !important; display: block !important;  }
						.col-40 { max-width: 100% !important; display: block !important; }
						.col-50 { max-width: 100% !important; display: block !important; }
						.col-50:first-child { border-bottom:6px #ffffff solid;border-right:0 !important }
						.col-50:last-child { border-left:0 !important }
						.col-60 { max-width: 100% !important; display: block !important; }
						.col-70 { max-width: 100% !important; display: block !important; }
  
						 .suite-details {
							 font-size:15px;
							 line-height:19px;
						 }
						 .hide {display: none;}
						 .show {display: inline-block}
    
					}

				</style>

				<link rel="stylesheet" href="https://use.typekit.net/ybi8yin.css">

				</head>

				<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" id="body">

				<div role="article" aria-roledescription="email" lang="en" style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;background-color:#fbf9f6">
  

					<table width="100%" align="center" bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" role="presentation">
						<tr>
							<td align="center">
								<!--[if mso]>
								<table width="720" style="width:720px;" align="center" role="presentation">
								<tr>
								<td>
								<![endif]-->
								<div style="width:100%;max-width:720px;margin:0 auto;">        
        
									<table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
										<tr>
											<td>
												<a href="https://7dale.com">
													<img src="https://7dale.com/eblasts/241028/logo.png" border="0" width="100%" style="display:block;width:100%;" alt="No.7 Dale" />
												</a>
											</td>
										</tr>          
										<tr>
											<td style="text-align:center;line-height:2px;border-top:2px #ffffff solid;"></td>
										</tr>         
										<tr>
											<td>
												<a href="https://7dale.com">
													<img src="https://7dale.com/eblasts/241028/rooftop.jpg" border="0" width="100%" style="display:block;width:100%;" alt="No.7 Dale" />
												</a>
											</td>
										</tr> 
									</table>
            
										<table align="center" bgcolor="#f8f6f1" width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
										<tr>
											<td style="padding:80px 5% 100px;text-align:center;">

												<table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
													<tr>
														<td style="text-align:center;padding: 0 0 10px">       
															<h2 style="margin:0 0 20px;text-align:center;">PRESENTING PENTHOUSE 8</h2>
															<p style="text-align:center;line-height:26px;">Here luxury reaches new heights. Step into the grand foyer, an impressive entrance that sets the tone for the opulence to follow. The expansive open concept suite design overlooking the Rosedale ravine is unique in every way. 
																<br><br>                        
																In the chef’s kitchen you’ll find the finest appliances designed to inspire culinary mastery. Throughout the suite seamless flowing rooms accentuate elegance from one space to another. Every corner of this penthouse exudes sophistication. 
																<br><br>
														The spacious outdoor terraces top off this exceptional residence.</p>

														 <!--LINE--> 
														 <table width="100%" style="width:100%;max-width: 550px;" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" dir="ltr">
															<tr>
																<td>
																	 <!--SPACER-->
																	 <table width="100%" style="width:100%" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" dir="ltr">
																		<tr>
																			<td height="30" style="height:30px"></td>
																		</tr>
																	</table>
																	<!--SPACER-->
																</td>
															</tr> 
															<tr>
																<td style="text-align:center;height:1px;border-top:1px #1e243e solid;"></td>
															</tr> 
														</table>
														<!--LINE--> 

														<div style="font-size:0;margin:0 auto;">
															<!--[if mso]>
															<table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" dir="ltr">
															<tr>
															<td style="padding:50px 0 50px;text-align:center;">
															<![endif]-->
															<div style="padding:50px 5% 50px;text-align:center;">                

																<p style="text-align:center;margin:0 0 10px;color:#aa8c52;"><strong>INTERIOR 5,167 SQ.FT. | MAIN TERRACE 1,443 SQ. FT. | ROOFTOP 4,000 SQ. FT. | TOTAL 3,168 SQ.FT.</strong></p>                

																<a href="https://7dale.com/pdf/7Dale-East-Suite-PH8.pdf">
																	<img src="https://7dale.com/eblasts/241028/floorplan.png" border="0" width="100%" style="display:block;width:100%;" alt="SUITE 104 No.7 Dale" />
																</a>              
     
															</div>
															<!--[if mso]>
															</td>
															</tr>
															</table>
															<![endif]-->
														</div>   

															 <!-- BUTTON -->
															 <table border="0" cellspacing="0" align="center" cellpadding="0">
																<tr>
																	<td style="padding: 10px; border-radius:2px;" align="center">
																				<a href="https://7dale.com/contact.php#learn-more" style="font-weight: 500;font-size: 16px;line-height:18px;letter-spacing:2px;color: #1e243e; text-decoration: none; 
																				display: inline-block;border: 2px #1e243e solid;padding:15px 20px 14px 20px;box-shadow: 0 0px 10px #dedede;font-weight:600;">MODEL SUITE TOUR BY APPOINTMENT</a>
																	 </td>
																 </tr>
															</table>
															<!-- BUTTON -->
                    
														</td>
													</tr>
											 </table>
                                     
											</td>
										</tr>         
									</table>            
        
									<table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
										<tr>
											<td style="padding:60px 5% 60px">
												<a href="https://7dale.com">
													<img src="https://7dale.com/eblasts/241028/rooms.jpg" border="0" width="100%" style="display:block;width:100%;" alt="No.7 Dale" />
												</a>
											</td>
										</tr>     
										<tr>
											<td style="padding:0 5% 80px;text-align:center;font-size:18px; line-height: 28px;">
												Located in one of <strong>Canada’s most prestigious neighbourhoods</strong>, No. 7 Dale is absolutely a <strong>one-of-a-kind address</strong>. The building’s architectural sophistication harmonizes beautifully with its historical surroundings. Designed for discerning residents who value exclusivity and modern comfort in a premium ravine location, it is a place <strong>never to be duplicated</strong>.
												<br><br>
											<strong>OTHER RESIDENCES FROM $5.9M</strong>
											</td>
										</tr>            
									</table>

									<table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
										<tr>
											<td>
												<a href="https://7dale.com">
													<img src="https://7dale.com/eblasts/241028/entrance.jpg" border="0" width="100%" style="display:block;width:100%;" alt="No.7 Dale" />
												</a>
											</td>
										</tr>
									</table>


									 <!--LINE--> 
									 <table width="100%" style="width:100%" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" dir="ltr">
										<tr>
											<td style="text-align:center;line-height:2px;border-top:2px #ffffff solid;"></td>
										</tr>
									</table>
									<!--LINE--> 


									<div style="font-size:0;margin:0 auto;">
										<!--[if mso]>
										<table width="100%" bgcolor="#1e243e" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" dir="ltr">
										<tr>
										<td style="background:#1e243e;padding:50px 5% 70px;text-align:center;line-height:24px;font-weight:600;">
										<![endif]-->
										<div style="background:#1e243e;padding:50px 5% 70px;text-align:center;line-height:24px;font-weight:600;">
											<p style="text-align:center;margin:20px 0 10px;color:#aa8c52;letter-spacing:3px;font-size:16px;"><strong>IMMEDIATE OCCUPANCY</strong></p>             
											<h5 style="line-height:24px;font-size:20px;color:#aa8c52">
												SALES OFFICE & MODEL SUITE
												<br>
												7 DALE AVENUE
											</h5>

											<h6 style="line-height:22px;font-size:16px;color:#aa8c52" class="appleLinks">
												BOOK YOUR PRIVATE MODEL TOUR
												<br>
												JANICE FOX
												<br>
												<a style="color:#aa8c52" href="mailto:JFOX@HAZELTONRE.COM">JFOX@HAZELTONRE.COM</a>
												<br>
												416 924 3779
											</h6>               
          

											 <!--LINE--> 
											 <table width="100%" style="width:100%;max-width:350px;" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" dir="ltr">
												<tr>
													<td style="padding:0 5% 10px;">
														<table cellspacing="0" cellpadding="0" border="0" width="100%" style="width: 100% !important;">
															<tr>
																	<td align="left" valign="top" height="1" style="background-color: #aa8c52; border-collapse:collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; mso-line-height-rule: exactly; line-height: 1px;"><!--[if gte mso 15]>&nbsp;<![endif]--></td>
																</tr>
														</table>
													</td>
												</tr>
											</table>    
              
											<table width="100%" style="width:100%;" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" dir="ltr">
												<tr>          
													<td style="text-align:center;color:#ffffff; font-size:18px;padding:5px 0 0" class="appleLinksWhite">
														<a style="color:#ffffff !important;font-weight:500;" href="mailto:Registration@7dale.com">REGISTRATION@<strong>7DALE.COM</strong></a>
														<br>
														<a style="color:#ffffff !important" href="https://7dale.com"><strong>7DALE</strong><span style="font-weight:500">.COM</span></a>
													</td> 
												</tr>
											</table>

										</div>
										<!--[if mso]>
										</td>
										</tr>
										</table>
										<![endif]-->
									</div>         


									<table align="center" width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
										<tr>
											<td style="color:#666666;font-size:11px;line-height:15px;text-align:center;padding:40px 5% 20px">
												Exclusive listing Brokerage, Hazelton Real Estate Inc. Brokers protected. <br>
												Details and specifications are subject to change without notice. <br>                
												Renderings are artist concept. E.&O.E. 2024.
											</td>
										</tr>
									</table>

									<table align="center" style="width:100%;" border="0" cellspacing="0" cellpadding="0">
										<tr>
											<td style="font-size:11px;line-height:12px;padding:40px 7% 50px;color:#555555;text-align:center;">Please <a style="border:none;color:#666666;text-decoration:none;" href="*|UNSUB|*"><strong>UNSUBSCRIBE ME</strong></a> from this mailing list.</td>
										</tr>
									</table>

								</div>
								<!--[if mso]>
								</td>
								</tr>
								</table>
								<![endif]-->
							</td>
						</tr>
					</table>

				</div>

				</body>
				</html>

				`;
		} else if (campaignId === 'MarinaResortCavtat') {
			htmlContent = `
				<!DOCTYPE html>
				<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
				<head>
				<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
				<meta http-equiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name=”x-apple-disable-message-reformatting”>
				<title></title><!-- LEAVE EMPTY -->

				<!--[if mso]>
				<style type="text/css">
					table {border-collapse:collapse;border-spacing:0;margin:0;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;}
					div, td {padding:0;}
					div {margin:0 !important;}
				</style>
				<noscript>
					<xml>
						<o:OfficeDocumentSettings>
							<o:PixelsPerInch>96</o:PixelsPerInch>
						</o:OfficeDocumentSettings>
					</xml>
				</noscript>
				<![endif]-->

				<!--[if gte mso 9]>
				<xml>
				<o:OfficeDocumentSettings>
				<o:AllowPNG/>
				<o:PixelsPerInch>96</o:PixelsPerInch>
				</o:OfficeDocumentSettings>
				</xml>
				<![endif]-->

				<style type="text/css">
					 img {
							border: 0;
							outline: none;
							text-decoration: none !important;
							-ms-interpolation-mode: bicubic;
					 }
					 a img {  border: none;  }
					 table {
							border-spacing: 0;
							border-collapse: collapse !important;
					 }
					 td {
							border-collapse: collapse !important;
							vertical-align:top;
					 }
					 table, tr, td {
							padding: 0;
							border: none;
							border-spacing: 0px;
							border-collapse: collapse;
					 }
					 div[style="margin: 16px 0;"] { margin: 0 !important; }
					 body {
						 font-family: 'Helvetica', Arial, sans-serif !important;
						 font-size:100% !important;
						 color:#092041;
						 background:#ffffff;
						 width: 100% !important;
						 min-width: 100%;
						 height: 100% !important;
						 margin: 0 auto !important;
						 Margin: 0 !important;
						 padding: 0 !important;
						 -webkit-text-size-adjust: 100%;
						 -ms-text-size-adjust: 100%;
						 word-spacing:normal;
					 }
					 html {min-height: 100%;}
					 table, td {
							mso-table-lspace: 0pt;
							mso-table-rspace: 0pt;
					 }

					 h1 {
						font-family: "abril-display", Times New Roman, serif !important;
						font-weight:500;
						font-style: italic;
						color:#bb945b;
						margin:0;
						font-size:80px;
						line-height:80px;
					 }

					 h2 {
						font-family: 'franklin-gothic-urw-cond', sans-serif !important;
						color:#092041;
						font-size:36px;
						line-height:36px;  
						font-weight:500;  
						text-align: left;
						margin:0;
						padding-left:10px;
					 }   

					 /* UPDATE FONT!! */
					 [style*="abril-display"] {
							font-family: 'abril-display', Times New Roman, serif !important;
						}

					 a { text-decoration:none !important; }
					 #outlook a {padding: 0; }
					 .appleLinks a {
							color:#092041 !important;
							text-decoration: none;}
					 .appleLinksWhite a {
							color: #ffffff !important;
							text-decoration: none;}
					 .appleLinksBlack a {
							color: #092041 !important;
							text-decoration: none;}

					 u + #body a,
					 a[x-apple-data-detectors] {
							color: inherit !important;
							text-decoration: none !important;
							font-size: inherit !important;
							font-family: inherit !important;
							font-weight: inherit !important;
							line-height: inherit !important;
					 }

					 .col-5 { max-width: 5% !important;height:0 }
					 .col-90 { max-width: 90% !important; }

					 .col-40 { max-width: 40% !important; }
					 .col-60 { max-width: 60% !important; }  

					 .col-10 { max-width: 10% !important;height:0 }
					 .col-80 { max-width: 80% !important; }

					 @media screen and (max-width: 450px) {   
						.col-40,
						.col-60, 
						.col-10,     
						.col-80,
						.col-5,
						.col-90 { max-width: 100% !important; display:block !important }  
						h1 {     
							font-size:56px;
							line-height:56px;
						 }  
						 h2 {   
							font-size:24px;
							line-height:24px;  
						 }
					}
				</style>

				</head>

				<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" id="body">

				<link rel="stylesheet" href="https://use.typekit.net/pqd8rse.css">

				<div role="article" aria-roledescription="email" lang="en" style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;background-color:#ffffff;">

					<table width="100%" style="width:100%" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
						<tr>
							<td align="center">

								<!--[if mso]>
								<table width="720" style="width:720px;" align="center" role="presentation">
								<tr>
								<td>
								<![endif]-->

								<div style="width:100%;max-width:720px;margin:0 auto;">

									<table align="center" bgcolor="#ffffff" style="width:100%;" border="0" cellspacing="0" cellpadding="0">            
										<tr>
											<td>
												<a href="https://marinaresortcavtat.com">
													<img src="https://marinaresortcavtat.com/img/cloud/series-3-banner.jpg" border="0" width="100%" style="display:block;width:100%;" alt="Marina Resort Cavtat" />
												</a>
											</td>
										</tr>
										<tr>
											<td style="background:#ffffff;">
												<a href="https://marinaresortcavtat.com">
													<img src="https://marinaresortcavtat.com/img/cloud/series-3-logo.png" border="0" width="100%" style="display:block;width:100%;" alt="Marina Resort Cavtat" />
												</a>
											</td>
										</tr>
									</table>

									<!--MAX-WIDTH 5% -->
									<div style="font-size:0;margin:0 auto;">
										<!--[if mso]>
										<table width="100%" style="width:100%" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" dir="ltr">
										<tr>
										<td style="width:36px;text-align:center" valign="middle">
										<![endif]-->
										<div class="col-5" style="max-width:36px;display:inline-block;width:100%;"></div>
										<!--[if mso]>
										</td>
										<td style="width:648px; text-align:center;" valign="middle">
										<![endif]-->
										<div class="col-90" style="max-width:648px;display:inline-block;width:100%;">
											<a href="https://marinaresortcavtat.com">
												<img src="https://marinaresortcavtat.com/img/cloud/series-3-boardwalk.jpg" border="0" width="100%" style="display:block;width:100%;" alt="Marina Resort Cavtat" />
											</a>
										</div>
										<!--[if mso]>
										</td>
										<td style="width:36px;text-align:center" valign="middle">
										<![endif]-->
										<div class="col-5" style="max-width:36px;display:inline-block;width:100%;"></div>
										<!--[if mso]>
										</td>
										</tr>
										</table>
										<![endif]-->
									</div>
									<!--MAX-WIDTH 5%-->          

									<div style="font-size:0;margin:0 auto;background:#ffffff">
										<!--[if mso]>
										<table width="100%" bgcolor="#ffffff" style="width:100%" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" dir="ltr">
										<tr>
										<td style="text-align:left; padding: 60px 5% 0; background:#ffffff;">
										<![endif]-->
										<div style="text-align:left; padding: 60px 5% 0; background:#ffffff;">   
              
											<a href="https://marinaresortcavtat.com">
												<img src="https://marinaresortcavtat.com/img/cloud/series-3-wonderful.png" border="0" width="100%" style="display:block;width:100%;" alt="Marina Resort Cavtat" />
											</a>                      

											<p style="font-size:16px;line-height:26px;color:#092041;text-align:left;margin:0;background:#ffffff;">
												Marina Resort Cavtat sits in a location of the world that not only offers ideal weather all year
												round, but truly magical this season. Like an oasis, Marina Resort Cavtat will rise up along
												the winding, ragged shores of the Adriatic, offering visitors and residents a haven of <strong>5-star
												amenities, such as the marina, yacht club, spa, lungomare, fine dining and the boardwalk,
												along with the hotel, private villas and waterfront apartments.</strong> Here, you can indulge in
												local holiday traditions and create your own with moments that will last a lifetime.
											</p>   
              
										</div>
										<!--[if mso]>
										</td>
										</tr>
										</table>
										<![endif]-->
									</div>

									<table align="center" bgcolor="#fffffff" style="width:100%;" border="0" cellspacing="0" cellpadding="0">
										<tr>
											<td style="background:#ffffff">
												<a href="https://marinaresortcavtat.com">
													<img src="https://marinaresortcavtat.com/img/cloud/series-3-season.jpg" border="0" width="100%" style="display:block;width:100%;" alt="Marina Resort Cavtat" />
												</a>
											</td>
										</tr>
										<tr>
											<td style="padding: 0 0 0 5%;background:#ffffff">
												<a href="https://marinaresortcavtat.com">
													<img src="https://marinaresortcavtat.com/img/cloud/series-3-calendar.jpg" border="0" width="100%" style="display:block;width:100%;" alt="Marina Resort Cavtat" />
												</a>
											</td>
										</tr> 
										<tr>
											<td style="padding: 0 0 0 5%;background:#ffffff">
												<a href="https://marinaresortcavtat.com">
													<img src="https://marinaresortcavtat.com/img/cloud/series-3-exclusive.png" border="0" width="100%" style="display:block;width:100%;" alt="Marina Resort Cavtat" />
												</a>
											</td>
										</tr>            
									</table>    

									<!--SPACER-->
									<table width="100%" style="width:100%" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" dir="ltr">
										<tr>
											<td height="40" style="height:40px"></td>
										</tr>
									</table>

									<!--MAX-WIDTH 5% -->
									<div style="font-size:0;margin:0 auto;background:#ffffff">
										<!--[if mso]>
										<table width="100%" bgcolor="#fffffff" style="width:100%" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" dir="ltr">
										<tr>
										<td style="width:36px;text-align:center" valign="middle">
										<![endif]-->
										<div class="col-5" style="max-width:36px;display:inline-block;width:100%;background:#ffffff"></div>
										<!--[if mso]>
										</td>
										<td style="width:648px; text-align:center;" valign="middle">
										<![endif]-->
										<div class="col-90" style="max-width:648px;display:inline-block;width:100%;background:#ffffff">
											<a href="https://marinaresortcavtat.com">
												<img src="https://marinaresortcavtat.com/img/cloud/series-3-marina.jpg" border="0" width="100%" style="display:block;width:100%;" alt="Marina Resort Cavtat" />
											</a>
										</div>
										<!--[if mso]>
										</td>
										<td style="width:36px;text-align:center" valign="middle">
										<![endif]-->
										<div class="col-5" style="max-width:36px;display:inline-block;width:100%;background:#ffffff"></div>
										<!--[if mso]>
										</td>
										</tr>
										</table>
										<![endif]-->
									</div>
									<!--MAX-WIDTH 5%-->
          
									<table align="center" bgcolor="#fffffff" style="width:100%;" border="0" cellspacing="0" cellpadding="0">
										<tr>
											<td style="padding:50px 0 60px;background:#ffffff">
												<a href="https://marinaresortcavtat.com">
													<img src="https://marinaresortcavtat.com/img/cloud/series-3-logo-ownership.png" border="0" width="100%" style="display:block;width:100%;" alt="Marina Resort Cavtat" />
												</a>
											</td>
										</tr>           
									</table>
          
									<table align="center" style="width:100%;" border="0" cellspacing="0" cellpadding="0">
										<tr>
											<td>
												<a href="https://marinaresortcavtat.com">
													<img src="https://marinaresortcavtat.com/img/cloud/series-3-footer-wave.jpg" border="0" width="100%" style="display:block;width:100%;" alt="Marina Resort Cavtat" />
												</a>
											</td>
										</tr>           
									</table>         

									<table align="center" bgcolor="#092041" style="width:100%;" border="0" cellspacing="0" cellpadding="0">
										<tr>
											<td style="text-align:center;padding: 40px 8% 50px">

												<h2 style="font-size:30px;line-height:32px;color:#91cfaa;text-align:center;margin-bottom:0;font-weight:normal;">DISCOVERY CENTRE</h2>
												<h3 style="font-size:22px;line-height:24px;color:#91cfaa;text-align:center;margin-bottom:15px;margin-top:0;font-weight:normal;">(COMING SOON)</h3>
												<p style="font-size:20px;line-height:25px;color:#ffffff;text-align:center;margin-bottom:15px;font-family: 'franklin-gothic-urw-cond', sans-serif !important;">
													Dr. Ante Starcevica 7 <br>                  
													HR-20210 Cavtat, Croatia
												</p>

												<table align="center" style="width:100%;max-width:300px;margin: 0 auto 10px" border="0" cellspacing="0" cellpadding="0">
													<tr>
														<td></td>
														<td style="text-align:center">
															<a href="https://marinaresortcavtat.com"><img src="https://marinaresortcavtat.com/img/cloud/url.png" border="0" width="100%" style="display:block;width:100%;" alt="Marina Resort Cavtat" /></a>
														</td>
														<td></td>
													</tr>
												</table>

												<table align="center" style="width:100%;max-width:300px;margin: 0 auto 10px" border="0" cellspacing="0" cellpadding="0">
													<tr>                    
														<td style="text-align:center;">
															<a target="_blank" href="https://www.facebook.com/marinaresortcavtat"><img width="40" src="https://marinaresortcavtat.com/img/cloud/icon-facebook-wh.png" alt="Marina Resort Cavtat on Facebook"></a>
															<a id="instagram" target="_blank" href="https://www.instagram.com/marinaresortcavtat/"><img width="40" src="https://marinaresortcavtat.com/img/cloud/icon-instagram-wh.png" alt="Marina Resort Cavtat on Instagram"></a>
															<a target="_blank" href="https://www.linkedin.com/company/marinaresortcavtat/"><img width="40" src="https://marinaresortcavtat.com/img/cloud/icon-linkedin-wh.png" alt="Marina Resort Cavtat on LinkedIn"></a>
														</td>                    
													</tr>
												</table>      
                
												<!--SPACER-->
												<table width="100%" style="width:100%" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" dir="ltr">
													<tr>
														<td height="50" style="height:50px"></td>
													</tr>
												</table>

												<!--TWO COL-->
												<div style="font-size:0; margin:0 auto;max-width:360px">
													<!--[if mso]>
													<table width="100%" style="width:100%;max-width:360px" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" dir="ltr">
													<tr>
													<td style="width:40%;text-align:center" valign="middle">
													<![endif]-->
													<div class="col-40" style="width:100%;max-width:288px;display:inline-block;vertical-align:middle;text-align:center">
														<a href="https://dalmi.ca/"><img src="https://marinaresortcavtat.com/img/cloud/logo-dalmi.png" border="0" width="100" style="max-width:100px;" alt="Dalmi International" /></a>
													</div>
													<!--[if mso]>
													</td>
													<td style="width:60%;text-align:center" valign="middle">
													<![endif]-->
													<div class="col-60" style="width:100%;max-width:432px;display:inline-block;vertical-align:middle;text-align:center;">
														<a href="https://blueprint.global/"><img src="https://marinaresortcavtat.com/img/cloud/logo-blueprint-global.png" border="0" width="200" style="max-width:200px;" alt="Blueprint Global" /></a>
													</div>
													<!--[if mso]>
													</td>
													</tr>
													</table>
													<![endif]-->
												</div>
												<!--END OF TWO COL-->

												<!--SPACER-->
												<table width="100%" style="width:100%" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" dir="ltr">
													<tr>
														<td height="15" style="height:15px"></td>
													</tr>
												</table>

												<p style="text-align:center;color:#ffffff;font-size:11px; line-height:15px;">
													Marina Resort Cavtat is marketed exclusively by Blueprint Global. This is not an offering for sale. Any such offering can only be made with a disclosure statement. The Developer reserves the right to make changes and modifications to information contained herein without prior notice. Artist renderings are representation only and may not be accurate. E&OE. 2023.
													<br><br>
													*This project is being marketed and commercialized exclusively by Blueprint Global*
												</p>

											</td>
										</tr>
									</table>     

							</div>

							<!--[if mso]>
							</td>
							</tr>
							</table>
							<![endif]-->

							</td>
						</tr>
					</table>
				</div>

				</body>
				</html>

				`;
		} else if (campaignId === 'Kingsway') {
			htmlContent = `
						<!DOCTYPE html>
						<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
						<head>
						<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
						<meta http-equiv="X-UA-Compatible" content="IE=edge" />
						<meta name="viewport" content="width=device-width, initial-scale=1.0" />
						<meta name=”x-apple-disable-message-reformatting”>
						<title></title><!-- LEAVE EMPTY -->

						<!--[if mso]>
						<style type="text/css">
							table {border-collapse:collapse;border-spacing:0;margin:0;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;}
							div, td {padding:0;}
							div {margin:0 !important;}
						</style>
						<noscript>
							<xml>
								<o:OfficeDocumentSettings>
									<o:PixelsPerInch>96</o:PixelsPerInch>
								</o:OfficeDocumentSettings>
							</xml>
						</noscript>
						<![endif]-->

						<!--[if gte mso 9]>
						<xml>
						<o:OfficeDocumentSettings>
						<o:AllowPNG/>
						<o:PixelsPerInch>96</o:PixelsPerInch>
						</o:OfficeDocumentSettings>
						</xml>
						<![endif]-->

						<link rel="stylesheet" href="https://use.typekit.net/bna3qmo.css">

						<style type="text/css">
							 img {
									border: 0;
									outline: none;
									text-decoration: none !important;
									-ms-interpolation-mode: bicubic;
							 }
							 a img {  border: none;  }
							 table {
									border-spacing: 0;
									border-collapse: collapse !important;
							 }
							 td {
									border-collapse: collapse !important;
									vertical-align:top;
							 }
							 table, tr, td {
									padding: 0;
									border: none;
									border-spacing: 0px;
									border-collapse: collapse;
							 }
							 div[style="margin: 16px 0;"] { margin: 0 !important; }
							 body {
								 font-family: 'futura-pt', Arial, sans-serif !important;
								 font-size:100% !important;
								 color:#666666;
								 background:#ffffff;
								 width: 100% !important;
								 min-width: 100%;
								 height: 100% !important;
								 margin: 0 auto !important;
								 Margin: 0 !important;
								 padding: 0 !important;
								 -webkit-text-size-adjust: 100%;
								 -ms-text-size-adjust: 100%;
								 word-spacing:normal;
							 }
							 html {min-height: 100%;}
							 table, td {
									mso-table-lspace: 0pt;
									mso-table-rspace: 0pt;
							 }

							 a { text-decoration:none !important; }
							 #outlook a {padding: 0; }
							 .appleLinks a {
									color:#666666 !important;
									text-decoration: none;}
							 .appleLinksWhite a {
									color: #ffffff !important;
									text-decoration: none;}
							 .appleLinksBlack a {
									color: #000000 !important;
									text-decoration: none;}

							 u + #body a,
							 a[x-apple-data-detectors] {
									color: inherit !important;
									text-decoration: none !important;
									font-size: inherit !important;
									font-family: inherit !important;
									font-weight: inherit !important;
									line-height: inherit !important;
							 }

							 .col-5 { max-width: 5% !important;height:0 }
							 .col-90 { max-width: 90% !important; }

							 .col-10 { max-width: 10% !important;height:0 }
							 .col-80 { max-width: 80% !important; }

							 .col-15 { max-width: 15% !important;height:0 }
							 .col-70 { max-width: 70% !important; }

							 .col-20 { max-width: 20% !important;height:0 }
							 .col-60 { max-width: 60% !important; }

							 .col-25 { max-width: 25% !important;height:0 }
							 .col-50 { max-width: 50% !important; }

							 .col-30 { max-width: 30% !important; }
							 .col-33 { max-width: 33.3% !important; }
							 .col-40 { max-width: 40% !important; }
							 .col-50 { max-width: 50% !important; }
							 .col-60 { max-width: 60% !important; }
							 .col-70 { max-width: 70% !important; }

							 @media screen and (max-width: 550px) {
								 .col-5,
								 .col-10,
								 .col-15,
								 .col-20,
								 .col-25,
								 .col-60,
								 .col-70,
								 .col-80,
								 .col-90 { max-width: 100% !important; }

								.col-30 { max-width: 100% !important; display: block !important; }
								.col-33 { max-width: 100% !important; display: block !important;  }
								.col-40 { max-width: 100% !important; display: block !important; }
								.col-50 { max-width: 100% !important; display: block !important; }
								.col-60 { max-width: 100% !important; display: block !important; }
								.col-70 { max-width: 100% !important; display: block !important; }
							}
						</style>

						<link rel="stylesheet" href="">

						</head>

						<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" id="body">

						<div role="article" aria-roledescription="email" lang="en" style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;background-color:#ffffff;">

							<table width="100%" style="width:100%" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
								<tr>
									<td align="center">

										<!--[if mso]>
										<table width="720" style="width:720px;" align="center" role="presentation">
										<tr>
										<td>
										<![endif]-->

										<div style="width:100%;max-width:720px;margin:0 auto;">

											<table align="center" style="width:100%;" border="0" cellspacing="0" cellpadding="0">
												<tr>
													<td>
														<a href="https://kingswaybytheriver.ca/">
															<img src="https://kingswaybytheriver.ca/eblasts/230126/logo.jpg" border="0" width="100%" style="display:block;width:100%;" alt="Kingsway by the River" />
														</a>
													</td>
												</tr>
											</table>

											<table align="center" style="width:100%;" border="0" cellspacing="0" cellpadding="0">
												<tr>
													<td style="text-align:center; padding:60px 0">
														<a href="https://kingswaybytheriver.ca/">
															<img src="https://kingswaybytheriver.ca/eblasts/230126/logo.png" border="0" width="250" style="width:100%;max-width:250px" alt="Kingsway by the River" />
														</a>
													</td>
												</tr>
											</table>

											<!--MAX-WIDTH 10% -->
											<div style="font-size:0;margin:0 auto;">
												<!--[if mso]>
												<table width="100%" style="width:100%" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" dir="ltr">
												<tr>
												<td style="width:72px;text-align:center" valign="middle">
												<![endif]-->
												<div class="col-10" style="max-width:72px;display:inline-block;width:100%;"></div>
												<!--[if mso]>
												</td>
												<td style="width:576px; text-align:center;padding: 0 5%;" valign="middle">
												<![endif]-->
												<div class="col-80" style="max-width:576px;display:inline-block;width:100%;">
													<div style="text-align:center;font-size:38px;line-height:38px;color:#00a788;padding: 0 5%">
														YOUR 2 BED & DEN <br>
														URBAN RETREAT WITH AN
														OUTSTANDING TERRACE
													</div>
												</div>
												<!--[if mso]>
												</td>
												<td style="width:72px;text-align:center" valign="middle">
												<![endif]-->
												<div class="col-10" style="max-width:72px;display:inline-block;width:100%;"></div>
												<!--[if mso]>
												</td>
												</tr>
												</table>
												<![endif]-->
											</div>
											<!--MAX-WIDTH 10%-->

											<br>

											<!--MAX-WIDTH 10% -->
											<div style="font-size:0;margin:0 auto;">
												<!--[if mso]>
												<table width="100%" style="width:100%" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" dir="ltr">
												<tr>
												<td style="width:72px;text-align:center" valign="middle">
												<![endif]-->
												<div class="col-10" style="max-width:72px;display:inline-block;width:100%;"></div>
												<!--[if mso]>
												</td>
												<td style="width:576px; text-align:center;padding: 0 5%;" valign="middle">
												<![endif]-->
												<div class="col-80" style="max-width:576px;display:inline-block;width:100%;">
													<div style="color:#878a8e;font-size:18px;line-height:26px;text-align:center;padding: 0 5%;">
														Perched above the Humber River, with spectacular conservation lands and the nearby
														Lambton Golf Course, sits Kingsway by the River. In this sold out building, you have
														the opportunity to own this spacious two bedroom and den split-plan residence. This
														suite features open-concept living and two bedrooms, including an ensuite washroom
														in the primary bedroom. The remarkable, grand terrace offers sunny south-west
														facing views to take in the city, entertain friends or enjoy a natural retreat. Take
														advantage of this rare find before it’s too late.
													</div>
												</div>
												<!--[if mso]>
												</td>
												<td style="width:72px;text-align:center" valign="middle">
												<![endif]-->
												<div class="col-10" style="max-width:72px;display:inline-block;width:100%;"></div>
												<!--[if mso]>
												</td>
												</tr>
												</table>
												<![endif]-->
											</div>
											<!--MAX-WIDTH 10%-->

											<br><br><br><br>

											<div style="font-size:0;margin:0 auto;">
												<!--[if mso]>
												<table width="100%" style="width:100%" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" dir="ltr">
												<tr>
												<td style="display:block;text-align:center;padding: 0 5%;">
												<![endif]-->
												<div style="display:block;text-align:center;">
													<div style="text-align:center;padding: 0 5%;">
														<h1 style="font-size:50px;line-height:52px;color:#00a788;font-weight:normal;margin:0;">SUITE 606</h1>
														<h4 style="font-size:20px;line-height:26px;color:#00a788;font-weight:normal;margin:0 0 30px;">2 BEDROOM & DEN &nbsp; &nbsp;| &nbsp; 1,009 SQ.FT. INTERIOR</h4>
														<h3 style="font-size:28px;line-height:29px;color:#00a788;margin:0 0 5px;">PRICED AT $1,059,900</h3>
														<h4 style="font-size:18px;line-height:22px;color:#00a788;font-weight:normal;margin:0 0 10px;">INCLUDES 2 SIDE-BY-SIDE PARKING SPACES & 1 LOCKER</h4>
														<h4 style="font-size:18px;line-height:22px;color:#00a788;font-weight:bold;margin:0;">Each parking space valued at $50,000 <br> Locker valued at $7,500</h4>
                 
													</div>
												</div>
												<!--[if mso]>
												</td>
												</tr>
												</table>
												<![endif]-->
											</div>

											<br><br><br>

											<!--MAX-WIDTH 10% -->
											<div style="font-size:0;margin:0 auto;">
												<!--[if mso]>
												<table width="100%" style="width:100%" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" dir="ltr">
												<tr>
												<td style="width:72px;text-align:center" valign="middle">
												<![endif]-->
												<div class="col-10" style="max-width:72px;display:inline-block;width:100%;"></div>
												<!--[if mso]>
												</td>
												<td style="width:576px; text-align:center;" valign="middle">
												<![endif]-->
												<div class="col-80" style="max-width:576px;display:inline-block;width:100%;">
													<a href="https://kingswaybytheriver.ca/floorplans-tower-1bed.php">
														<img src="https://kingswaybytheriver.ca/eblasts/230126/floorplan.png" border="0" width="100%" style="width:100%;" alt="Kingsway by the River" />
													</a>
												</div>
												<!--[if mso]>
												</td>
												<td style="width:72px;text-align:center" valign="middle">
												<![endif]-->
												<div class="col-10" style="max-width:72px;display:inline-block;width:100%;"></div>
												<!--[if mso]>
												</td>
												</tr>
												</table>
												<![endif]-->
											</div>
											<!--MAX-WIDTH 10%-->

											<br><br><br><br>

											<!--BUTTON-->
											<div style="font-size:0;margin:0 auto;">
												<!--[if mso]>
												<table width="280" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" dir="ltr">
												<tr>
												<td style="background:#00a788;color:#ffffff;text-align:center;font-size:16px;font-weight:600;vertical-align:middle" class="appleLinksWhite" valign="middle">
												<![endif]-->
												<div style="max-width:280px; background:#00a788;color:#ffffff;text-align:center;font-size:16px;font-weight:600;vertical-align:middle" class="appleLinksWhite">
													<a href="https://tours.bhtours.ca/606-4208-dundas-street-west/" style="background: #00a788; text-decoration: none; padding: 10px; color: #ffffff; display:inline-block;text-align:center;">
														<!--[if mso]><i style="letter-spacing: 25px;mso-font-width:-100%;mso-text-raise:20pt">&nbsp;</i><![endif]-->
														<span style="mso-text-raise:10pt;font-weight:bold;">TAKE A VIRTUAL TOUR</span>
														<!--[if mso]><i style="letter-spacing: 25px;mso-font-width:-100%">&nbsp;</i><![endif]-->
													</a>
												</div>
												<!--[if mso]>
												</td>
												</tr>
												</table>
												<![endif]-->
											</div>

											<br><br><br><br>

											<!--MAX-WIDTH 10% -->
											<div style="font-size:0;margin:0 auto;">
												<!--[if mso]>
												<table width="100%" style="width:100%" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" dir="ltr">
												<tr>
												<td style="width:72px;text-align:center" valign="middle">
												<![endif]-->
												<div class="col-10" style="max-width:72px;display:inline-block;width:100%;"></div>
												<!--[if mso]>
												</td>
												<td style="width:576px; text-align:center;" valign="middle">
												<![endif]-->
												<div class="col-80" style="max-width:576px;display:inline-block;width:100%;">
													<a href="https://kingswaybytheriver.ca/">
														<img src="https://kingswaybytheriver.ca/eblasts/230126/balcony.jpg" border="0" width="100%" style="width:100%;" alt="Kingsway by the River" />
													</a>
												</div>
												<!--[if mso]>
												</td>
												<td style="width:72px;text-align:center" valign="middle">
												<![endif]-->
												<div class="col-10" style="max-width:72px;display:inline-block;width:100%;"></div>
												<!--[if mso]>
												</td>
												</tr>
												</table>
												<![endif]-->
											</div>
											<!--MAX-WIDTH 10%-->

											<br>

											<!--MAX-WIDTH 10% -->
											<div style="font-size:0;margin:0 auto;">
												<!--[if mso]>
												<table width="100%" style="width:100%" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" dir="ltr">
												<tr>
												<td style="width:72px;text-align:center" valign="middle">
												<![endif]-->
												<div class="col-10" style="max-width:72px;display:inline-block;width:100%;"></div>
												<!--[if mso]>
												</td>
												<td style="width:576px; text-align:center;" valign="middle">
												<![endif]-->
												<div class="col-80" style="max-width:576px;display:inline-block;width:100%;">
													<a href="https://kingswaybytheriver.ca/">
														<img src="https://kingswaybytheriver.ca/eblasts/230126/livingroom.jpg" border="0" width="100%" style="width:100%;" alt="Kingsway by the River" />
													</a>
												</div>
												<!--[if mso]>
												</td>
												<td style="width:72px;text-align:center" valign="middle">
												<![endif]-->
												<div class="col-10" style="max-width:72px;display:inline-block;width:100%;"></div>
												<!--[if mso]>
												</td>
												</tr>
												</table>
												<![endif]-->
											</div>
											<!--MAX-WIDTH 10%-->

											<br>

											<!--MAX-WIDTH 10% -->
											<div style="font-size:0;margin:0 auto;">
												<!--[if mso]>
												<table width="100%" style="width:100%" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" dir="ltr">
												<tr>
												<td style="width:72px;text-align:center" valign="middle">
												<![endif]-->
												<div class="col-10" style="max-width:72px;display:inline-block;width:100%;"></div>
												<!--[if mso]>
												</td>
												<td style="width:576px; text-align:center;" valign="middle">
												<![endif]-->
												<div class="col-80" style="max-width:576px;display:inline-block;width:100%;">
													<a href="https://kingswaybytheriver.ca/">
														<img src="https://kingswaybytheriver.ca/eblasts/230126/bedroom.jpg" border="0" width="100%" style="width:100%;" alt="Kingsway by the River" />
													</a>
												</div>
												<!--[if mso]>
												</td>
												<td style="width:72px;text-align:center" valign="middle">
												<![endif]-->
												<div class="col-10" style="max-width:72px;display:inline-block;width:100%;"></div>
												<!--[if mso]>
												</td>
												</tr>
												</table>
												<![endif]-->
											</div>
											<!--MAX-WIDTH 10%-->

										<table align="center" style="width:100%;" border="0" cellspacing="0" cellpadding="0">
											<tr>
												<td style="text-align:center; padding:50px 0">
													<a href="https://kingswaybytheriver.ca/">
														<img src="https://kingswaybytheriver.ca/eblasts/230126/icon.png" border="0" width="40" style="width:100%;max-width:40px" alt="Kingsway by the River" />
													</a>
												</td>
											</tr>
										</table>

										<div style="font-size:0;margin:0 auto;">
											<!--[if mso]>
											<table width="100%" bgcolor="#00a788" style="width:100%" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" dir="ltr">
											<tr>
											<td style="display:block;text-align:center;vertical-align:middle;padding: 40px 5% 25px;" class="appleLinksWhite">
											<![endif]-->
											<div style="display:block;text-align:center;vertical-align:middle;background:#00a788;color:#ffffff;">
												<div style="text-align:center;padding: 40px 5% 25px;" class="appleLinksWhite">
													<p style="font-size:20px;line-height:24px;color:#ffffff;font-weight:normal;margin:0 0 5px;letter-spacing:2px;"><strong>KINGSWAY</strong>BYTHE<strong>RIVER</strong>.CA &nbsp;&nbsp;~ &nbsp;&nbsp;<strong></strong>416 301 3151</strong></p>
													<p style="font-size:16px;line-height:20px;color:#ffffff;font-weight:normal;margin:0 0 15px;">4208 Dundas St W, Etobicoke ON M8X 0B1</p>
													<a href="https://www.urbancapital.ca/">
														<img src="https://kingswaybytheriver.ca/eblasts/230126/logo-urban-capital.png" border="0" width="150" style="width:100%;max-width:150px" alt="Urban Capital" />
													</a>
													<a href="https://northamrealty.com/">
														<img src="https://kingswaybytheriver.ca/eblasts/230126/logo-northam.png" border="0" width="150" style="width:100%;max-width:150px" alt="Northam" />
													</a>
												</div>
											</div>
											<!--[if mso]>
											</td>
											</tr>
											</table>
											<![endif]-->
										</div>

										<br>

										<table align="center" style="width:100%;" border="0" cellspacing="0" cellpadding="0">
											<tr>
												<td style="font-size:12px;line-height:15px;padding:20px 5% 20px;color:#555555;text-align:center;">
													Exclusive Listing Brokerage, Milborne Real Estate Inc. Brokers protected. <br>
													Details and specifications are subject to change without notice. Renderings are artist concept. E.&O.E. 2023.
												</td>
											</tr>
											<tr>
												<td style="font-size:11px;line-height:12px;padding:20px 7% 50px;color:#555555;text-align:center;">Please <a style="border:none;color:#666666;text-decoration:none;" href="*|UNSUB|*"><strong>UNSUBSCRIBE ME</strong></a> from this mailing list.</td>
											</tr>
										</table>

									</div>

									<!--[if mso]>
									</td>
									</tr>
									</table>
									<![endif]-->

									</td>
								</tr>
							</table>
						</div>

						</body>
						</html>

						`;
		} else if (campaignId === 'Diamond') {
			htmlContent = `
<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name=”x-apple-disable-message-reformatting”>
	<title></title><!-- LEAVE EMPTY -->

	<!--[if mso]>
<style type="text/css">
	table {border-collapse:collapse;border-spacing:0;margin:0;mso-table-lspace: 0pt !important;mso-table-rspace: 0pt !important;}
	div, td {padding:0;}
	div {margin:0 !important;}
</style>
<noscript>
	<xml>
		<o:OfficeDocumentSettings>
			<o:PixelsPerInch>96</o:PixelsPerInch>
		</o:OfficeDocumentSettings>
	</xml>
</noscript>
<![endif]-->

	<!--[if gte mso 9]>
<xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
<![endif]-->

	<style type="text/css">
		img {
			border: 0;
			outline: none;
			text-decoration: none !important;
			-ms-interpolation-mode: bicubic;
		}

		a img {
			border: none;
		}

		table {
			border-spacing: 0;
			border-collapse: collapse !important;
		}

		td {
			border-collapse: collapse !important;
			vertical-align: top;
		}

		table,
		tr,
		td {
			padding: 0;
			border: none;
			border-spacing: 0px;
			border-collapse: collapse;
		}

		div[style="margin: 16px 0;"] {
			margin: 0 !important;
		}

		body {
			font-family: 'Helvetica', Arial, sans-serif !important;
			font-size: 100% !important;
			color: #666666;
			background: #ffffff;
			width: 100% !important;
			min-width: 100%;
			height: 100% !important;
			margin: 0 auto !important;
			Margin: 0 !important;
			padding: 0 !important;
			-webkit-text-size-adjust: 100%;
			-ms-text-size-adjust: 100%;
			word-spacing: normal;
		}

		html {
			min-height: 100%;
		}

		table,
		td {
			mso-table-lspace: 0pt;
			mso-table-rspace: 0pt;
		}

		h1 {
			font-family: 'Helvetica', Arial, sans-serif !important;
			font-weight: bold;
			color: #ef4136;
		}

		/* UPDATE FONT HERE & ADD INLINE!! */
		[style*="abril-display"] {
			font-family: 'abril-display', Times New Roman, serif !important;
		}


		a {
			text-decoration: none !important;
		}

		#outlook a {
			padding: 0;
		}

		.appleLinks a {
			color: #ef4136 !important;
			text-decoration: none;
		}

		.appleLinksWhite a {
			color: #efece4 !important;
			text-decoration: none;
		}

		.appleLinksBlack a {
			color: #666666 !important;
			text-decoration: none;
		}

		u+#body a,
		a[x-apple-data-detectors] {
			color: inherit !important;
			text-decoration: none !important;
			font-size: inherit !important;
			font-family: inherit !important;
			font-weight: inherit !important;
			line-height: inherit !important;
		}

		.bdr-left {
			width: 99%;
		}

		.bdr-right {
			width: 99%;
		}

		.col-5 {
			max-width: 5% !important;
			height: 0
		}

		.col-90 {
			max-width: 90% !important;
		}

		.col-10 {
			max-width: 10% !important;
			height: 0
		}

		.col-80 {
			max-width: 80% !important;
		}

		.col-15 {
			max-width: 15% !important;
			height: 0
		}

		.col-70 {
			max-width: 70% !important;
		}

		.col-20 {
			max-width: 20% !important;
			height: 0
		}

		.col-60 {
			max-width: 60% !important;
		}

		.col-25 {
			max-width: 25% !important;
			height: 0
		}

		.col-50 {
			max-width: 46% !important;
		}

		.col-30 {
			max-width: 30% !important;
		}

		.col-33 {
			max-width: 33.3% !important;
		}

		.col-40 {
			max-width: 40% !important;
		}

		.col-50 {
			max-width: 50% !important;
		}

		.col-60 {
			max-width: 60% !important;
		}

		.col-70 {
			max-width: 70% !important;
		}

		@media screen and (max-width: 550px) {

			.col-5,
			.col-10,
			.col-15,
			.col-20,
			.col-25,
			.col-60,
			.col-70,
			.col-80,
			.col-90 {
				max-width: 100% !important;
			}

			.bdr-right {
				width: 100% !important;
				display: block !important;
			}

			.bdr-left {
				width: 100% !important;
				display: block !important;
				border-bottom: 6px solid #efece4 !important;
			}


			.col-30 {
				max-width: 100% !important;
				display: block !important;
			}

			.col-33 {
				max-width: 100% !important;
				display: block !important;
			}

			.col-40 {
				max-width: 100% !important;
				display: block !important;
			}

			.col-50 {
				max-width: 100% !important;
				display: block !important;
			}

			.col-60 {
				max-width: 100% !important;
				display: block !important;
			}

			.col-70 {
				max-width: 100% !important;
				display: block !important;
			}
		}
	</style>

</head>

<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" id="body">

	<div role="article" aria-roledescription="email" lang="en" style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;background-color:#ffffff;">

		<table width="100%" style="width:100%" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
			<tr>
				<td align="center;background:#efece4;">

					<!--[if mso]>
				<table width="720" bgcolor="#efece4" style="width:720px;" align="center" role="presentation">
				<tr>
				<td>
				<![endif]-->

					<div style="width:100%;max-width:720px;margin:0 auto;">

						<table align="center" bgcolor="#efece4" style="width:100%;background:#efece4;" border="0" cellspacing="0" cellpadding="0">
							<tr>
								<td>
									<a href="https://jmckean44.netlify.app/diamond/">
										<img src="https://jmckean44.netlify.app/htmls/logo.png" border="0" width="100%" style="display:block;width:100%;" alt="The Diamond Rental Living" />
									</a>
								</td>
							</tr>
							<tr>
								<td>
									<a href="https://jmckean44.netlify.app/diamond/">
										<img src="https://jmckean44.netlify.app/htmls/couple.jpg" border="0" width="100%" style="display:block;width:100%;" alt="The Diamond Rental Living" />
									</a>
								</td>
							</tr>
							<tr>
								<td style="padding: 30px 0 0">
									<a href="https://jmckean44.netlify.app/diamond/">
										<img src="https://jmckean44.netlify.app/htmls/move-in.png" border="0" width="100%" style="display:block;width:100%;" alt="The Diamond Rental Living" />
									</a>
								</td>
							</tr>
						</table>

						<table align="center" bgcolor="#efece4" style="width:100%;" border="0" cellspacing="0" cellpadding="0">
							<tr>
								<td style="padding: 0 5%">
									<!--MAX-WIDTH 5% -->
									<div style="font-size:0;margin:0 auto;background:#efece4;">
										<!--[if mso]>
									<table width="100%" bgcolor="#efece4" style="width:100%" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" dir="ltr">
									<tr>
									<td style="width:36px;text-align:center" valign="middle">
									<![endif]-->
										<div class="col-5" style="max-width:36px;display:inline-block;width:100%;"></div>
										<!--[if mso]>
									</td>
									<td style="width:648px; text-align:center;" valign="middle">
									<![endif]-->
										<div class="col-90" style="max-width:648px;display:inline-block;width:100%;">
											<p style="font-size:18px;line-height:28px;color:#000000;margin:0 0 40px;text-align:justify;">
												Overlooking the Junction, The Diamond is Toronto’s freshest new
												purpose-built rental community. From fabulous open-concept
												floor plans to 20,000 sq. ft. of amenities for a modern city lifestyle,
												The Diamond checks off all the right boxes – location, design,
												amenities and transit. Here the choice is yours.
											</p>
										</div>
										<!--[if mso]>
									</td>
									<td style="width:36px;text-align:center" valign="middle">
									<![endif]-->
										<div class="col-5" style="max-width:36px;display:inline-block;width:100%;"></div>
										<!--[if mso]>
									</td>
									</tr>
									</table>
									<![endif]-->
									</div>
									<!--MAX-WIDTH 5%-->
								</td>
							</tr>
						</table>


						<table bgcolor="#efece4" align="center" style="width:100%;" border="0" cellspacing="0" cellpadding="0">
							<tr>
								<td>
									<a href="https://jmckean44.netlify.app/diamond/">
										<img src="https://jmckean44.netlify.app/htmls/plan.png" border="0" width="100%" style="display:block;width:100%;" alt="The Diamond Rental Living" />
									</a>
									<p style="font-size:28px;line-height:28px;color:#000000;margin:0 0 20px;text-align:center;font-weight:bold;letter-spacing: 3px">SUITE A</p>
								</td>
							</tr>
							<tr>
								<td>
									<a href="https://jmckean44.netlify.app/diamond/">
										<img src="https://jmckean44.netlify.app/htmls/floorplan.png" border="0" width="100%" style="display:block;width:100%;" alt="The Diamond Rental Living" />
									</a>
								</td>
							</tr>
						</table>

						<table align="center" bgcolor="#efece4" style="width:100%;background:#efece4;" border="0" cellspacing="0" cellpadding="0">
							<tr>
								<td style="text-align:center; color:#ef4136; font-size:24px; font-weight:bold; padding: 50px 5% 10px;line-height:24px;">
									Open Concept living
								</td>
							</tr>
							<tr>
								<td style="text-align:center; padding: 10px 5% 10px">
									<!--LINE W PADDING-->
									<table align="center" style="width:100%;max-width: 350px;" border="0" cellpadding="0" cellspacing="0" role="presentation" dir="ltr">
										<tr>
											<td style="padding:0 5%;">
												<div style="font-size:0;margin:0 auto;">
													<!--[if mso]>
												<table width="100%" bgcolor="#efece4;" style="width:100%" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" dir="ltr">
												<tr>
												<td style="padding:0 5%;height:1px !important; background: #000000;font-size:1px;color:#000000">
												<![endif]-->
													<div style="padding:0 5%;height:1px !important; background: #000000;font-size:1px;color:#000000">.</div>
													<!--[if mso]>
												</td>
												</tr>
												</table>
												<![endif]-->
												</div>
											</td>
										</tr>
									</table>
									<!--LINE W PADDING-->
								</td>
							</tr>
							<tr>
								<td style="text-align:center; color:#ef4136; font-size:24px; font-weight:bold; padding: 10px 5% 10px;line-height:24px">
									Custom Designed Kitchen & Bath Cabinetry
								</td>
							</tr>
							<tr>
								<td style="text-align:center; padding: 10px 5% 10px">
									<!--LINE W PADDING-->
									<table align="center" style="width:100%;max-width: 350px;" border="0" cellpadding="0" cellspacing="0" role="presentation" dir="ltr">
										<tr>
											<td style="padding:0 5%;">
												<div style="font-size:0;margin:0 auto;">
													<!--[if mso]>
												<table width="100%" style="width:100%" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" dir="ltr">
												<tr>
												<td style="padding:0 5%;height:1px !important; background: #000000;font-size:1px;color:#000000">
												<![endif]-->
													<div style="padding:0 5%;height:1px !important; background: #000000;font-size:1px;color:#000000">.</div>
													<!--[if mso]>
												</td>
												</tr>
												</table>
												<![endif]-->
												</div>
											</td>
										</tr>
									</table>
									<!--LINE W PADDING-->
								</td>
							</tr>
							<tr>
								<td style="text-align:center; color:#ef4136; font-size:24px; font-weight:bold; padding: 10px 5% 10px;line-height:24px">
									5 Brand Name Appliances <br>
									<em style="font-weight: normal;font-size:18px;">(Fridge, Stove, Dishwasher, Microwave, Washer & Dryer)</em>
								</td>
							</tr>
							<tr>
								<td style="text-align:center; padding: 10px 5% 10px">
									<!--LINE W PADDING-->
									<table align="center" style="width:100%;max-width: 350px;" border="0" cellpadding="0" cellspacing="0" role="presentation" dir="ltr">
										<tr>
											<td style="padding:0 5%;">
												<div style="font-size:0;margin:0 auto;">
													<!--[if mso]>
												<table width="100%" style="width:100%" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" dir="ltr">
												<tr>
												<td style="padding:0 5%;height:1px !important; background: #000000;font-size:1px;color:#000000">
												<![endif]-->
													<div style="padding:0 5%;height:1px !important; background: #000000;font-size:1px;color:#000000">.</div>
													<!--[if mso]>
												</td>
												</tr>
												</table>
												<![endif]-->
												</div>
											</td>
										</tr>
									</table>
									<!--LINE W PADDING-->
								</td>
							</tr>
							<tr>
								<td style="text-align:center; color:#ef4136; font-size:24px; font-weight:bold; padding: 10px 5% 10px;line-height:24px">
									Ensuite Stacked Washer & Dryer
								</td>
							</tr>
							<tr>
								<td style="text-align:center; padding: 10px 5% 10px">
									<!--LINE W PADDING-->
									<table align="center" style="width:100%;max-width: 350px;" border="0" cellpadding="0" cellspacing="0" role="presentation" dir="ltr">
										<tr>
											<td style="padding:0 5%;">
												<div style="font-size:0;margin:0 auto;">
													<!--[if mso]>
												<table width="100%" style="width:100%" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" dir="ltr">
												<tr>
												<td style="padding:0 5%;height:1px !important; background: #000000;font-size:1px;color:#000000">
												<![endif]-->
													<div style="padding:0 5%;height:1px !important; background: #000000;font-size:1px;color:#000000">.</div>
													<!--[if mso]>
												</td>
												</tr>
												</table>
												<![endif]-->
												</div>
											</td>
										</tr>
									</table>
									<!--LINE W PADDING-->
								</td>
							</tr>
							<tr>
								<td style="text-align:center; color:#ef4136; font-size:24px; font-weight:bold; padding: 10px 5% 10px;line-height:24px">
									Window Coverings
								</td>
							</tr>
							<tr>
								<td style="text-align:center; padding: 10px 5% 10px">
									<!--LINE W PADDING-->
									<table align="center" style="width:100%;max-width: 350px;" border="0" cellpadding="0" cellspacing="0" role="presentation" dir="ltr">
										<tr>
											<td style="padding:0 5%;">
												<div style="font-size:0;margin:0 auto;">
													<!--[if mso]>
												<table width="100%" style="width:100%" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" dir="ltr">
												<tr>
												<td style="padding:0 5%;height:1px !important; background: #000000;font-size:1px;color:#000000">
												<![endif]-->
													<div style="padding:0 5%;height:1px !important; background: #000000;font-size:1px;color:#000000">.</div>
													<!--[if mso]>
												</td>
												</tr>
												</table>
												<![endif]-->
												</div>
											</td>
										</tr>
									</table>
									<!--LINE W PADDING-->
								</td>
							</tr>
							<tr>
								<td style="text-align:center; color:#ef4136; font-size:24px; font-weight:bold; padding: 10px 5% 50px;line-height:24px">
									Private Balcony
								</td>
							</tr>
						</table>

						<!--MAX-WIDTH 5% -->
						<div style="font-size:0;margin:0 auto;background:#efece4;">
							<!--[if mso]>
						<table width="100%" bgcolor="#efece4;" style="width:100%" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" dir="ltr">
						<tr>
						<td style="width:36px;text-align:center" valign="middle">
						<![endif]-->
							<div class="col-5" style="max-width:36px;display:inline-block;width:100%;"></div>
							<!--[if mso]>
						</td>
						<td style="width:648px; text-align:center;" valign="middle">
						<![endif]-->
							<div class="col-90" style="max-width:648px;display:inline-block;width:100%;">
								<a href="https://jmckean44.netlify.app/diamond/">
									<img src="https://jmckean44.netlify.app/htmls/setting.png" border="0" width="100%" style="display:block;width:100%;" alt="The Diamond Rental Living" />
								</a>
							</div>
							<!--[if mso]>
						</td>
						<td style="width:36px;text-align:center" valign="middle">
						<![endif]-->
							<div class="col-5" style="max-width:36px;display:inline-block;width:100%;"></div>
							<!--[if mso]>
						</td>
						</tr>
						</table>
						<![endif]-->
						</div>
						<!--MAX-WIDTH 5%-->


						<table align="center" bgcolor="#efece4" style="width:100%;" border="0" cellspacing="0" cellpadding="0">
							<tr>
								<td style="padding: 10px 5%">


									<!--MAX-WIDTH 5% -->
									<div style="font-size:0;margin:0 auto;background:#efece4;">
										<!--[if mso]>
						<table width="100%" bgcolor="#efece4" style="width:100%" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" dir="ltr">
						<tr>
						<td style="width:36px;text-align:center" valign="middle">
						<![endif]-->
										<div class="col-5" style="max-width:36px;display:inline-block;width:100%;"></div>
										<!--[if mso]>
						</td>
						<td style="width:648px; text-align:center;" valign="middle">
						<![endif]-->
										<div class="col-90" style="max-width:648px;display:inline-block;width:100%;">
											<p style="font-size:18px;line-height:28px;color:#000000;margin:0 0 40px;text-align:justify;">
												Complete your lifestyle with Club Diamond, our 20,000 sf recreational club
												that includes 5-star amenities, such as the indoor pool, a fully-equipped
												gym with cardio, weights and a yoga room and a co-working space.
												The Diamond is also topped off by a theatre room, games room and an
												independent daycare centre. Come home to The Diamond.
											</p>

											<table align="center" style="width:100%;" border="0" cellspacing="0" cellpadding="0">
												<tr>
													<td>
														<!--TWO COL-->
														<div style="font-size:0; margin:0 auto">
															<!--[if mso]>
											<table width="100%" style="width:100%" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" dir="ltr">
											<tr>
											<td style="width:50%;text-align:center" valign="middle">
											<![endif]-->
															<div class="col-50" style="width:100%;max-width:360px;display:inline-block;vertical-align:middle;text-align:left">
																<img class="bdr-left" src="https://jmckean44.netlify.app/htmls/workout.jpg" border="0" width="100%" alt="The Diamond Rental Living" />
															</div>
															<!--[if mso]>
											</td>
											<td style="width:50%;text-align:center" valign="middle">
											<![endif]-->
															<div class="col-50" style="width:100%;max-width:360px;display:inline-block;vertical-align:middle;text-align:right">
																<img class="bdr-right" src="https://jmckean44.netlify.app/htmls/swimming.jpg" border="0" width="100%" alt="The Diamond Rental Living" />
															</div>
															<!--[if mso]>
											</td>
											</tr>
											</table>
											<![endif]-->
														</div>
														<!--END OF TWO COL-->
													</td>
												</tr>
											</table>

										</div>
										<!--[if mso]>
						</td>
						<td style="width:36px;text-align:center" valign="middle">
						<![endif]-->
										<div class="col-5" style="max-width:36px;display:inline-block;width:100%;"></div>
										<!--[if mso]>
						</td>
						</tr>
						</table>
						<![endif]-->
									</div>
									<!--MAX-WIDTH 5%-->

								</td>
							</tr>
						</table>

						<!--MAX-WIDTH 10% -->
						<div style="font-size:0;margin:0 auto;background:#efece4;">
							<!--[if mso]>
						<table width="100%" bgcolor="#efece4;" style="width:100%" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" dir="ltr">
						<tr>
						<td style="width:72px;text-align:center" valign="middle">
						<![endif]-->
							<div class="col-10" style="max-width:72px;display:inline-block;width:100%;"></div>
							<!--[if mso]>
						</td>
						<td style="width:576px; text-align:center;" valign="middle">
						<![endif]-->
							<div class="col-80" style="max-width:576px;display:inline-block;width:100%;">
								<!--SPACER-->
								<table width="100%" style="width:100%" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" dir="ltr">
									<tr>
										<td height="40" style="height:40px"></td>
									</tr>
								</table>
								<!--SPACER-->
								<a href="https://jmckean44.netlify.app/diamond/">
									<img src="https://jmckean44.netlify.app/htmls/pricing.png" border="0" width="100%" style="display:block;width:100%;" alt="The Diamond Rental Living" />
								</a>
								<!--SPACER-->
								<table width="100%" style="width:100%" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" dir="ltr">
									<tr>
										<td height="40" style="height:40px"></td>
									</tr>
								</table>
								<!--SPACER-->
							</div>
							<!--[if mso]>
						</td>
						<td style="width:72px;text-align:center" valign="middle">
						<![endif]-->
							<div class="col-10" style="max-width:72px;display:inline-block;width:100%;"></div>
							<!--[if mso]>
						</td>
						</tr>
						</table>
						<![endif]-->
						</div>
						<!--MAX-WIDTH 10%-->


						<table align="center" bgcolor="#efece4" style="width:100%;" border="0" cellspacing="0" cellpadding="0">
							<tr>
								<td>
									<a href="https://jmckean44.netlify.app/diamond/">
										<img src="https://jmckean44.netlify.app/htmls/building.jpg" border="0" width="100%" style="display:block;width:100%;" alt="The Diamond Rental Living" />
									</a>
								</td>
							</tr>
						</table>

						<div style="font-size:0;margin:0 auto;">
							<!--[if mso]>
						<table width="100%" style="width:100%" bgcolor="#efece4" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" dir="ltr">
						<tr>
						<td style="padding: 60px 5% 50px; text-align:justify;font-size:16px;line-height:28px;color:#000000;background:#efece4" valign="middle">
						<![endif]-->
							<div style="padding:60px 5% 50px; text-align:justify;font-size:16px;line-height:28px;color:#000000;background:#efece4" class="appleLinks">

								<h1 style="text-align:center; font-size:34px; line-height:34px;">STAY TUNED FOR <br>FURTHER INFORMATION</h1>



								<!-- START CENTERED BUTTON -->
								<center>
									<table width="100%">
										<tr>
											<td>
												<table border="0" cellpadding="0" cellspacing="0">
													<tr>
														<td height="20" width="100%" style="font-size: 20px; line-height: 20px;">
															&nbsp;
														</td>
													</tr>
												</table>
												<table border="0" align="center" cellpadding="0" cellspacing="0" style="margin:0 auto;">
													<tbody>
														<tr>
															<td align="center">
																<table border="0" cellpadding="0" cellspacing="0" style="margin:0 auto;">
																	<tr>
																		<td align="center" bgcolor="#ef4136" width="260" style="border-radius: 2px;color: #efece4 !important" class="appleLinksWhite">
																			<a href="*|FORWARD|*" style="background: #ef4136;border: 1px solid #ef4136; padding: 12px;width:250px;display: block;text-decoration: none;border:0;text-align: center;font-weight: bold;font-size: 20px;line-height:20px;letter-spacing:1px;color: #efece4 !important;border-radius: 2px; box-shadow: 0 0 7px #cccccc;">
																				SHARE WITH FRIEND
																			</a>
																		</td>
																	</tr>
																</table>
															</td>
														</tr>
													</tbody>
												</table>
												<table border="0" cellpadding="0" cellspacing="0">
													<tr>
														<td height="20" width="100%" style="font-size: 20px; line-height: 20px;">
															&nbsp;
														</td>
													</tr>
												</table>
											</td>
										</tr>
									</table>
								</center>
								<!-- END CENTERED BUTTON -->

								<p style="text-align:center">
									<a href="https://milborne.com/">
										<img src="https://jmckean44.netlify.app/htmls/logo-milborne.png" border="0" width="200" style="display:inline-block;width:200px;max-width:200px;" alt="Milborne Group" />
									</a>
								</p>

								<h1 style="text-align:center; font-size:20px; line-height:24px;">
									<a href="tel:6472786867" style="text-decoration:none;color:#ef4136;">647 278 6867</a>
									<br>
									<a style="text-decoration:none;color:#ef4136;font-size:20px; line-height:24px;" href="https://junctionrentals.ca">JUNCTIONRENTALS.CA</a>
								</h1>

							</div>
							<!--[if mso]>
						</td>
						</tr>
						</table>
						<![endif]-->
						</div>

						<table align="center" style="width:100%;" border="0" cellspacing="0" cellpadding="0">
							<tr>
								<td style="color:#555555;text-align:center;font-size:11px; line-height:15px;padding: 30px 5% 40px;">
									<strong>NEUDORFER CORP</strong>
									<br>
									Specifications are subject to change without notice.
									<br>
									Daycare centre independently operated available at extra costs. *See leasing agent for rental guarantee rate information.
									<br>
									Renderings are for mood and impression only. E.&O.E. 2024
								</td>
							</tr>
							<tr>
								<td style="font-size:10px;line-height:12px;padding:0 5% 50px;color:#555555;text-align:center;">Please <a style="border:none;color:#666666;text-decoration:none;" href="*|UNSUB|*"><strong>UNSUBSCRIBE ME</strong></a> from this mailing list.</td>
							</tr>
						</table>

					</div>

					<!--[if mso]>
			</td>
			</tr>
			</table>
			<![endif]-->

				</td>
			</tr>
		</table>
	</div>
</body>
</html>
`;
		} else {
			return {
				statusCode: 400,
				body: JSON.stringify({ success: false, message: 'Invalid campaign selected.' }),
			};
		}

		// Email content
		const mailOptions = {
			from: '"Jeff" jmckean44@gmail.com',
			to: email,
			bcc: 'jeff@pbmarketing.ca',
			subject: `Campaign: ${campaignId}`,
			html: htmlContent,
		};

		// Send the email
		await transporter.sendMail(mailOptions);

		console.log(mailOptions);

		return {
			statusCode: 200,
			body: JSON.stringify({ success: true, message: 'Email sent successfully!' }),
		};
	} catch (error) {
		console.error('Error sending email:', error);
		return {
			statusCode: 500,
			body: JSON.stringify({ success: false, message: 'Failed to send email.' }),
		};
	}
};
