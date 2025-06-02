export const fetchUdemyCategoryCourses = async (category = 'development') => {
	const url = `https://udemy-api2.p.rapidapi.com/v1/udemy/category/${category}`;
  
	const options = {
	  method: 'POST',
	  headers: {
		'X-RapidAPI-Key': 'YOUR_API_KEY', // replace this
		'X-RapidAPI-Host': 'udemy-api2.p.rapidapi.com',
		'Content-Type': 'application/json',
	  },
	  body: JSON.stringify({
		page: 1,
		page_size: 10,
		ratings: '',
		instructional_level: [],
		lang: [],
		price: [],
		duration: [],
		subtitles_lang: [],
		sort: 'popularity',
		features: [],
		locale: 'en_US',
		extract_pricing: true
	  }),
	};
  
	try {
	  const response = await fetch(url, options);
	  const data = await response.json();
	  console.log('✅ Category API Result:', data);
	  return data.data || []; // assuming data.data contains courses
	} catch (error) {
	  console.error('❌ Category fetch error:', error);
	  return [];
	}
  };
  