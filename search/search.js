function SearchHere()
{
	                                    // Enter some code here
										var query = document.getElementById('query').value;
										document.getElementById('no-results').style.display = 'block';
										document.getElementById('home').style.display = 'none';
										document.getElementById('math').style.display = 'none';
										document.getElementById('notifications').style.display = 'none';
										document.getElementById('qualifications').style.display = 'none';
										document.getElementById('code').style.display = 'none';
										document.getElementById('further-maths-igcse-library').style.display = 'none';
										var search = query.split(' ');
										// Create a for loop that loops through every element in the array 'search' and compares it with keywords to show relevant results.
										for (i = 0; i < search.length; i++) {
											// Loop through every word in the array and compare with keywords
											switch (search[i].toLowerCase()) {
												
												case 'home':
												document.getElementById('home').style.display = 'block';
												document.getElementById('no-results').style.display = 'none';
												break;
												case 'math':
												document.getElementById('math').style.display = 'block';
												document.getElementById('no-results').style.display = 'none';
												break;
												case 'notifications':
												document.getElementById('notifications').style.display = 'block';
												document.getElementById('no-results').style.display = 'none';
												break;
												case 'qualifications':
												document.getElementById('qualifications').style.display = 'block';
												document.getElementById('no-results').style.display = 'none';
												break;
												case 'code':
												document.getElementById('code').style.display = 'block';
												document.getElementById('no-results').style.display = 'none';
												break;
												case 'further':
												document.getElementById('further-maths-igcse-library').style.display = 'block';
												document.getElementById('no-results').style.display = 'none';
												break;
												case 'maths':
												document.getElementById('further-maths-igcse-library').style.display = 'block';
												document.getElementById('no-results').style.display = 'none';
												break;
												case 'igcse':
												document.getElementById('further-maths-igcse-library').style.display = 'block';
												document.getElementById('no-results').style.display = 'none';
												break;
												case 'library':
												document.getElementById('further-maths-igcse-library').style.display = 'block';
												document.getElementById('no-results').style.display = 'none';
												break;
												default:
												console.log('No results found');
											}
										}
						
}
